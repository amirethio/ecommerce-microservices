import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { AppError } from "../utils/appError.js";
import { createChapaTransaction } from "../utils/chapa.js";
import {
	decrementProductStock,
	fetchProductsByIds,
	incrementProductStock,
} from "../utils/serviceClients.js";

const createOrderSchema = z.object({
	shippingAddress: z.string().min(1),
	items: z
		.array(
			z.object({
				productId: z.string().uuid(),
				quantity: z.number().int().positive(),
			}),
		)
		.min(1),
});

const updateOrderStatusSchema = z.object({
	status: z.enum(["PENDING", "PAID", "SHIPPED", "DELIVERED", "CANCELLED"]),
});

const orderInclude = {
	items: {
		orderBy: { createdAt: "asc" },
	},
} as const;

export const createOrder = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	let reservedItems: Array<{ productId: string; quantity: number }> = [];

	try {
		const { shippingAddress, items } = createOrderSchema.parse(req.body);
		const userId = req.user!.id;

		const productIds = items.map((item) => item.productId);
		const products = await fetchProductsByIds(productIds);

		if (products.length !== productIds.length) {
			return next(new AppError("Some products were not found", 404));
		}

		const productMap = new Map(
			products.map((product) => [product.id, product]),
		);

		const orderItems = items.map((item) => {
			const product = productMap.get(item.productId);

			if (!product) {
				throw new AppError(`Product ${item.productId} not found`, 404);
			}

			return {
				productId: item.productId,
				productName: product.name,
				productSlug: product.slug,
				productImage: product.images?.[0] ?? null,
				quantity: item.quantity,
				price: product.price,
			};
		});

		const totalAmount = orderItems.reduce(
			(sum, item) => sum + Number(item.price) * item.quantity,
			0,
		);

		reservedItems = orderItems.map((item) => ({
			productId: item.productId,
			quantity: item.quantity,
		}));

		await decrementProductStock(reservedItems);

		const orderResult = await prisma.$transaction(async (tx) => {
			const order = await tx.order.create({
				data: {
					userId,
					totalAmount,
					shippingAddress,
					items: {
						create: orderItems.map((item) => ({
							productId: item.productId,
							productName: item.productName,
							productSlug: item.productSlug,
							productImage: item.productImage,
							quantity: item.quantity,
							price: item.price,
						})),
					},
				},
				include: orderInclude,
			});

			const payment = await createChapaTransaction({
				amount: totalAmount.toString(),
				currency: "ETB",
				email: req.user?.email ?? "customer@example.com",
				first_name: "Customer",
				last_name: "",
				tx_ref: order.id,
				callback_url: `${req.protocol}://${req.get("host")}/api/v1/chapa/verify`,
				return_url: `${req.protocol}://${req.get("host")}/orders/${order.id}`,
			});

			const updatedOrder = await tx.order.update({
				where: { id: order.id },
				data: {
					paymentReference: payment.tx_ref,
				},
				include: orderInclude,
			});

			return { order: updatedOrder, payment };
		});

		res.status(201).json({
			status: "success",
			data: {
				order: orderResult.order,
				paymentUrl: orderResult.payment.checkout_url,
			},
		});
	} catch (error) {
		if (reservedItems.length > 0) {
			await incrementProductStock(reservedItems).catch(() => {
				// Best-effort compensation if order creation fails after stock reservation.
			});
		}

		if (error instanceof z.ZodError) {
			return next(new AppError("Validation error", 400, error.format()));
		}

		next(error);
	}
};

export const getUserOrders = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const userId = req.user!.id;
		const orders = await prisma.order.findMany({
			where: { userId },
			orderBy: { createdAt: "desc" },
			include: orderInclude,
		});

		res.status(200).json({
			status: "success",
			data: { orders },
		});
	} catch (error) {
		next(error);
	}
};

export const getOrder = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const id = String(req.params.id);
		const userId = req.user!.id;

		const order = await prisma.order.findUnique({
			where: { id },
			include: orderInclude,
		});

		if (!order) {
			return next(new AppError("Order not found", 404));
		}

		if (order.userId !== userId && req.user!.role !== "ADMIN") {
			return next(new AppError("Not authorized", 403));
		}

		res.status(200).json({
			status: "success",
			data: { order },
		});
	} catch (error) {
		next(error);
	}
};

export const updateOrderStatus = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const id = String(req.params.id);
		const { status } = updateOrderStatusSchema.parse(req.body);

		const existingOrder = await prisma.order.findUnique({
			where: { id },
		});

		if (!existingOrder) {
			return next(new AppError("Order not found", 404));
		}

		const updatedOrder = await prisma.order.update({
			where: { id },
			data: { status },
			include: orderInclude,
		});

		if (status === "CANCELLED" && existingOrder.status !== "CANCELLED") {
			const orderItems = await prisma.orderItem.findMany({
				where: { orderId: id },
			});

			await incrementProductStock(
				orderItems.map((item) => ({
					productId: item.productId,
					quantity: item.quantity,
				})),
			);
		}

		res.status(200).json({
			status: "success",
			data: { order: updatedOrder },
		});
	} catch (error) {
		if (error instanceof z.ZodError) {
			return next(new AppError("Validation error", 400, error.format()));
		}

		next(error);
	}
};

export const getAllOrders = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 10;
		const skip = (page - 1) * limit;

		const [orders, totalCount] = await Promise.all([
			prisma.order.findMany({
				skip,
				take: limit,
				orderBy: { createdAt: "desc" },
				include: orderInclude,
			}),
			prisma.order.count(),
		]);

		res.status(200).json({
			status: "success",
			data: {
				orders,
				pagination: {
					page,
					limit,
					totalCount,
					totalPages: Math.ceil(totalCount / limit),
				},
			},
		});
	} catch (error) {
		next(error);
	}
};

export const checkPurchased = async (req: Request, res: Response) => {
	const userId = req.user;

	const productId = req.params.productId as string;

	try {
		const purchased = await prisma.order.findMany({
			where: {
				userId: userId?.id,
				items: {
					some: {
						productId: productId,
					},
				},
			},
		});
		res.status(200).json({
			status: "sucess",
			data: purchased,
		});
	} catch (error) {}
};
