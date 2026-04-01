import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import axios from "axios";
import { AppError } from "../utils/appError";
import { addToWishlist, getWishlistByUserId, removeFromWishlist } from "../services/wishlist.service";
import type { AuthRequest } from "../middleware/authMiddleware";

const wishlistItemSchema = z.object({
  productId: z.string().uuid(),
});

const getUserId = (req: Request, res: Response) => {
  const userId = (req as AuthRequest).user?.id;
  if (userId) return userId;
  res.status(401).json({ status: "error", message: "Unauthorized" });
  return null;
};

export const getWishlist = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = getUserId(req, res);
    if (!userId) return;

    const wishlist = await getWishlistByUserId(userId);

    // Hydrate each wishlist item with product details via Product Service (through gateway)
    try {
      const gatewayUrl = process.env.GATEWAY_URL;
      if (!gatewayUrl) {
        throw new Error("GATEWAY_URL is not configured");
      }

      const baseUrl = gatewayUrl.replace(/\/$/, "");

      const itemsWithProducts = await Promise.all(
        wishlist.items.map(async (item) => {
          try {
            const resp = await axios.get(`${baseUrl}/products/${item.productId}`);
            return {
              ...item,
              product: resp.data?.data?.product ?? null,
            };
          } catch (_err) {
            // If product lookup fails, keep item but with null product
            return {
              ...item,
              product: null,
            };
          }
        }),
      );

      const hydratedWishlist = {
        ...wishlist,
        items: itemsWithProducts,
      };

      res.status(200).json({ status: "success", data: { wishlist: hydratedWishlist } });
    } catch (err) {
      return next(new AppError("Failed to load wishlist products", 502));
    }
  } catch (error) {
    next(error);
  }
};

export const addWishlistItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = getUserId(req, res);
    if (!userId) return;

    const validated = wishlistItemSchema.parse(req.body);
    // Check product existence via API Gateway -> product-service
    try {
      const gatewayUrl = process.env.GATEWAY_URL;
      if (!gatewayUrl) {
        throw new Error("GATEWAY_URL is not configured");
      }
      await axios.get(`${gatewayUrl.replace(/\/$/, "")}/products/${validated.productId}`);
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        return next(new AppError("Product not found", 404));
      }
      return next(new AppError("Failed to verify product", 502));
    }

    const result = await addToWishlist(userId, validated.productId);

    if (result.alreadyExists) {
      return res.status(200).json({
        status: "success",
        message: "Item already in wishlist",
      });
    }

    return res.status(201).json({
      status: "success",
      message: "Item added to wishlist",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return next(new AppError("Validation error", 400, error.format()));
    }
    next(error);
  }
};

export const removeWishlistItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = getUserId(req, res);
    if (!userId) return;

    const { productId } = req.params;
    const updated = await removeFromWishlist(userId, productId);

    if (!updated) {
      return next(new AppError("Wishlist not found", 404));
    }

    res.status(200).json({ status: "success", message: "Item removed from wishlist" });
  } catch (error) {
    next(error);
  }
};
