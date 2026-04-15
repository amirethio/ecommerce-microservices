import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { AppError } from "../utils/appError.js";
import axios from "axios";
import { ProductServiceClient } from "./../services/clients/product.service.client.js";
import { OrderServiceClient } from "./../services/clients/order.service.client.js";
import { UserServiceClient } from "../services/clients/user.service.client.js";

const GATEWAY_SECRET = process.env.GATEWAY_SECRET || "super-secret-gateway-key";
const Url = process.env.SERVICE_URL || "http://localhost";

// initailzing client services
const OrderService = new OrderServiceClient(`${Url}:3004`);
const ProductService = new ProductServiceClient(`${Url}:3002`);
const UserService = new UserServiceClient(`${Url}:3001`);
// Validation schemas
const createReviewSchema = z.object({
  productId: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  comment: z.string().optional(),
});

const updateReviewSchema = z.object({
  rating: z.number().int().min(1).max(5).optional(),
  comment: z.string().optional(),
});

// Create a new review
export const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Validate request body
    const validatedData = createReviewSchema.parse(req.body);
    const userId = req.user!.id;

    //? check if the product exists
    const product = await ProductService.getProductById(
      validatedData.productId,
    );
    if (!product) {
      return next(new AppError("Product not found", 404));
    }
    const BearerToken = req.headers.authorization as string;
    // Check if user has purchased the product
    const hasPurchased = await OrderService.CheckPurchased(
      validatedData.productId,
      BearerToken,
    );
    if (hasPurchased !== 200) {
      return next(
        new AppError("You can only review products you have purchased", 403),
      );
    }

    // Check if user has already reviewed this product
    const existingReview = await prisma.review.findFirst({
      where: {
        userId,
        productId: validatedData.productId,
      },
    });

    if (existingReview) {
      return next(new AppError("You have already reviewed this product", 409));
    }

    // Create review
    const review = await prisma.review.create({
      data: {
        userId,
        productId: validatedData.productId,
        rating: validatedData.rating,
        comment: validatedData.comment,
      },
    });

    // Update product average rating
    // 1. Get all reviews of the product
    // 2. Calculate average rating
    // 3. Update product with new average rating and rating count

    const productReviews = await prisma.review.findMany({
      where: { productId: validatedData.productId },
      select: { rating: true },
    });

    const totalRating = productReviews.reduce(
      (sum, review) => sum + review.rating,
      0,
    );
    const avgRating = totalRating / productReviews.length;

    // update product with new rating
    const response = ProductService.updateProductReview(
      validatedData.productId,
      {
        avgRating,
        ratingCount: productReviews.length,
      },
      BearerToken,
    );
    if (!response) {
      return next(new AppError("Failed to update product rating", 500));
    }

    res.status(201).json({
      status: "success",
      data: {
        review,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return next(new AppError("Validation error", 400, error.format()));
    }
    next(error);
  }
};

// Update a review
export const updateReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params as { id: string };
    const BearerToken = req.headers.authorization as string;

    const validatedData = updateReviewSchema.parse(req.body);
    const userId = req.user!.id;

    // Check if review exists and belongs to user
    const review = await prisma.review.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!review) {
      return next(new AppError("Review not found or not authorized", 404));
    }

    // Update review
    const updatedReview = await prisma.review.update({
      where: { id },
      data: validatedData,
    });

    // Update product average rating if rating changed
    if (validatedData.rating && validatedData.rating !== review.rating) {
      const productReviews = await prisma.review.findMany({
        where: { productId: review.productId },
        select: { rating: true },
      });

      const totalRating = productReviews.reduce(
        (sum, review) => sum + review.rating,
        0,
      );
      const avgRating = totalRating / productReviews.length;
      // add the updated avgRating

      const response = await ProductService.updateProductReview(
        review.productId,
        {
          avgRating,
          ratingCount: productReviews.length,
        },
        BearerToken,
      );

      if (!response.data) {
        return next(new AppError("Failed to update product rating", 500));
      }
    }

    res.status(200).json({
      status: "success",
      data: {
        review: updatedReview,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return next(new AppError("Validation error", 400, error.format()));
    }
    next(error);
  }
};

// Delete a review service
export const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params as { id: string };
    const userId = req.user!.id;
    const isAdmin = req.user!.role === "ADMIN";
    const BearerToken = req.headers.authorization as string;
    // Check if review exists

    const review = await prisma.review.findUnique({
      where: { id },
    });

    if (!review) {
      return next(new AppError("Review not found", 404));
    }

    // Check if user is authorized to delete the review
    if (!isAdmin && review.userId !== userId) {
      return next(new AppError("Not authorized", 403));
    }

    // Delete review
    await prisma.review.delete({
      where: { id },
    });

    // Update product average rating
    const productReviews = await prisma.review.findMany({
      where: { productId: review.productId },
      select: { rating: true },
    });

    if (productReviews.length > 0) {
      const totalRating = productReviews.reduce(
        (sum, review) => sum + review.rating,
        0,
      );
      const avgRating = totalRating / productReviews.length;
      const response = await ProductService.updateProductReview(
        review.productId,
        {
          avgRating,
          ratingCount: productReviews.length,
        },
        BearerToken,
      );

      if (!response.data) {
        return next(new AppError("Failed to update product rating", 500));
      }
    } else {
      const response = ProductService.updateProductReview(
        review.productId,
        {
          avgRating: null,
          ratingCount: 0,
        },
        BearerToken,
      );

      if (!response) {
        return next(new AppError("Failed to update product rating", 500));
      }
    }
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};

// Get reviews for a product
export const getProductReviews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params as { productId: string };
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const BearerToken = req.headers.authorization as string;

    // Check if product exists
    const product = await ProductService.getProductById(productId);

    if (!product) {
      return next(new AppError("Product not found", 404));
    }

    // Get reviews with pagination

    const [reviews, totalCount] = await Promise.all([
      prisma.review.findMany({
        where: { productId },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),

      prisma.review.count({ where: { productId } }),
    ]);

    // find user id and get info from user service
    const UserIds = [...new Set(reviews.map((review) => review.userId))];

    const user = await UserService.getUsersByIds(UserIds, BearerToken);

    // const userResponse = await instance.post(":3001/users/batch", {
    //   ids: UserIds,
    // });
    if (!user) {
      return next(new AppError("Failed to fetch user data", 500));
    }

    // mapping user info to reviews
    const reviewsWithUser = reviews.map((review) => {
      const userInfo = user.find(
        (userData: any) => userData.id === review.userId,
      );
      return { ...review, user: userInfo };
    });


    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    res.status(200).json({
      status: "success",
      data: {
        reviewsWithUser,
        pagination: {
          page,
          limit,
          totalCount,
          totalPages,
          hasNextPage,
          hasPrevPage,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get user's reviews
export const getUserReviews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user!.id;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const BearerToken = req.headers["authorization"] as string;

    // Get reviews with pagination
    const [reviews, totalCount] = await Promise.all([
      prisma.review.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.review.count({ where: { userId } }),
    ]);

    const ProductIds = [...new Set(reviews.map((review) => review.productId))];

    const productsResponse = await ProductService.getProductForReview(
      ProductIds,
      BearerToken,
    );

    if (!productsResponse) {
      return next(new AppError("Failed to fetch product data", 500));
    }
    const products = productsResponse.data;

    // mapping product info to reviews
    const reviewsWithProducts = reviews.map((review) => {
      const productInfo = products.find(
        (productData: any) => productData.id === review.productId,
      );
      return { ...review, product: productInfo };
    });

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    res.status(200).json({
      status: "success",
      data: {
        reviewsWithProducts,
        pagination: {
          page,
          limit,
          totalCount,
          totalPages,
          hasNextPage,
          hasPrevPage,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
