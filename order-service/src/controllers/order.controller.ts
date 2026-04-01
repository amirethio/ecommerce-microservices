import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { AppError } from "../utils/appError.js";
import { createChapaTransaction } from "../utils/chapa.js";

const createOrderSchema = z.object({
	shippingAddress: z.string().min(1),
});

const updateOrderStatusSchema = z.object({
	status: z.enum(["PENDING", "PAID", "SHIPPED", "DELIVERED", "CANCELLED"]),
});

const orderInclude = {
	items: {
		include: {
			product: {
				select: {
					id: true,
					name: true,
					slug: true,
					images: true,
				},
			},
		},
	},
} as const;

const orderUserInclude = {
	user: {
		select: {
			id: true,
			email: true,
			firstName: true,
			lastName: true,
		},
	},
} as const;

export const createOrder = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { shippingAddress } = createOrderSchema.parse(req.body);
		const userId = req.user!.id;

		const orderResult = await prisma.$transaction(async (tx) => {
			const cart = await tx.cart.findUnique({
				where: { userId },
				include: {
					items: {
						include: {
							product: true,
						},
					},
				},
			});

			if (!cart || cart.items.length === 0) {
				throw new AppError("Cart is empty", 400);
			}

			const totalAmount = cart.items.reduce((sum, item) => {
				return sum + Number(item.product.price) * item.quantity;
			}, 0);

			for (const item of cart.items) {
				if (item.product.stock < item.quantity) {
					throw new AppError(`Not enough stock for ${item.product.name}`, 400);
				}
			}

			const order = await tx.order.create({
				data: {
					userId,
					totalAmount,
					shippingAddress,
					items: {
						create: cart.items.map((item) => ({
							productId: item.productId,
							quantity: item.quantity,
							price: item.product.price,
						})),
					},
				},
				include: orderInclude,
			});

			for (const item of cart.items) {
				await tx.product.update({
					where: { id: item.productId },
					data: {
						stock: {
							decrement: item.quantity,
						},
					},
				});
			}

			await tx.cartItem.deleteMany({
				where: { cartId: cart.id },
			});

			const user = await tx.user.findUnique({
				where: { id: userId },
				select: {
					email: true,
					firstName: true,
					lastName: true,
				},
			});

			if (!user) {
				throw new AppError("User not found", 404);
			}

			const payment = await createChapaTransaction({
				amount: totalAmount.toString(),
				currency: "ETB",
				email: user.email,
				first_name: user.firstName || "Customer",
				last_name: user.lastName || "",
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

			for (const item of orderItems) {
				await prisma.product.update({
					where: { id: item.productId },
					data: {
						stock: {
							increment: item.quantity,
						},
					},
				});
			}
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
				include: orderUserInclude,
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
