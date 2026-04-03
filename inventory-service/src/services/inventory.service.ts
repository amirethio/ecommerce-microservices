import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { AppError } from "../utils/appError.js";

const updateStockSchema = z.object({
	quantity: z.number().int(),
	type: z.enum(["add", "remove", "adjust"]),
	description: z.string().optional(),
});

const updateLowStockAlertSchema = z.object({
	lowStockAlert: z.number().int().min(1),
});

export const updateStock = async (productId: string, userId: string, input: unknown) => {
	const validatedData = updateStockSchema.parse(input);

	const product = await prisma.product.findUnique({
		where: { id: productId },
	});

	if (!product) {
		throw new AppError("Product not found", 404);
	}

	let newStock: number;

	switch (validatedData.type) {
		case "add":
			newStock = product.stock + validatedData.quantity;
			break;
		case "remove":
			newStock = product.stock - validatedData.quantity;
			if (newStock < 0) {
				throw new AppError("Cannot remove more than available stock", 400);
			}
			break;
		case "adjust":
			newStock = validatedData.quantity;
			break;
		default:
			throw new AppError("Invalid operation type", 400);
	}

	const [updatedProduct, inventoryLog] = await prisma.$transaction([
		prisma.product.update({
			where: { id: productId },
			data: { stock: newStock },
		}),
		prisma.inventoryLog.create({
			data: {
				productId,
				quantity: validatedData.quantity,
				type: validatedData.type,
				description: validatedData.description,
				createdBy: userId,
			},
		}),
	]);

	return {
		product: {
			id: updatedProduct.id,
			name: updatedProduct.name,
			stock: updatedProduct.stock,
			updatedAt: updatedProduct.updatedAt,
		},
		inventoryLog: {
			id: inventoryLog.id,
			productId: inventoryLog.productId,
			quantity: inventoryLog.quantity,
			type: inventoryLog.type,
			description: inventoryLog.description,
			createdBy: inventoryLog.createdBy,
			createdAt: inventoryLog.createdAt,
		},
	};
};

export const updateLowStockAlert = async (productId: string, input: unknown) => {
	const validatedData = updateLowStockAlertSchema.parse(input);

	const product = await prisma.product.findUnique({
		where: { id: productId },
	});

	if (!product) {
		throw new AppError("Product not found", 404);
	}

	const updatedProduct = await prisma.product.update({
		where: { id: productId },
		data: {
			lowStockAlert: validatedData.lowStockAlert,
		},
	});

	return {
		product: {
			id: updatedProduct.id,
			name: updatedProduct.name,
			stock: updatedProduct.stock,
			lowStockAlert: updatedProduct.lowStockAlert,
			updatedAt: updatedProduct.updatedAt,
		},
	};
};

export const getInventoryLogs = async (productId: string, page = 1, limit = 10) => {
	const product = await prisma.product.findUnique({
		where: { id: productId },
	});

	if (!product) {
		throw new AppError("Product not found", 404);
	}

	const skip = (page - 1) * limit;

	const [logs, totalCount] = await Promise.all([
		prisma.inventoryLog.findMany({
			where: { productId },
			orderBy: { createdAt: "desc" },
			skip,
			take: limit,
		}),
		prisma.inventoryLog.count({ where: { productId } }),
	]);

	const totalPages = Math.ceil(totalCount / limit);

	return {
		logs,
		pagination: {
			page,
			limit,
			totalCount,
			totalPages,
			hasNextPage: page < totalPages,
			hasPrevPage: page > 1,
		},
	};
};

export const getLowStockProducts = async () => {
	const products = await prisma.product.findMany({
		orderBy: { stock: "asc" },
		include: {
			category: {
				select: {
					id: true,
					name: true,
				},
			},
		},
	});

	const lowStockProducts = products.filter((product) => product.stock <= product.lowStockAlert);

	return {
		products: lowStockProducts.map((product) => ({
			id: product.id,
			name: product.name,
			stock: product.stock,
			lowStockAlert: product.lowStockAlert,
			category: product.category,
		})),
		count: lowStockProducts.length,
	};
};

export const getInventorySnapshot = async (productId: string) => {
	const product = await prisma.product.findUnique({
		where: { id: productId },
		include: {
			category: {
				select: {
					id: true,
					name: true,
				},
			},
		},
	});

	if (!product) {
		throw new AppError("Product not found", 404);
	}

	return {
		product: {
			id: product.id,
			name: product.name,
			stock: product.stock,
			lowStockAlert: product.lowStockAlert,
			updatedAt: product.updatedAt,
			category: product.category,
		},
	};
};