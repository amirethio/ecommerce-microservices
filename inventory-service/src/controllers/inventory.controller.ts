import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import {
	getInventoryLogs as getInventoryLogsService,
	getInventorySnapshot,
	getLowStockProducts as getLowStockProductsService,
	updateLowStockAlert as updateLowStockAlertService,
	updateStock as updateStockService,
} from "../services/inventory.service.js";
import { AppError } from "../utils/appError.js";

const paginationSchema = z.object({
	page: z.coerce.number().int().positive().optional(),
	limit: z.coerce.number().int().positive().optional(),
});

export const updateStock = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { productId } = req.params;
		const result = await updateStockService(productId, req.user!.id, req.body);

		res.status(200).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		if (error instanceof z.ZodError) {
			return next(new AppError("Validation error", 400, error.format()));
		}

		next(error);
	}
};

export const updateLowStockAlert = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { productId } = req.params;
		const result = await updateLowStockAlertService(productId, req.body);

		res.status(200).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		if (error instanceof z.ZodError) {
			return next(new AppError("Validation error", 400, error.format()));
		}

		next(error);
	}
};

export const getInventoryLogs = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { productId } = req.params;
		const { page = 1, limit = 10 } = paginationSchema.parse(req.query);
		const result = await getInventoryLogsService(productId, page, limit);

		res.status(200).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		if (error instanceof z.ZodError) {
			return next(new AppError("Validation error", 400, error.format()));
		}

		next(error);
	}
};

export const getLowStockProducts = async (_req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await getLowStockProductsService();

		res.status(200).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

export const getInventoryProduct = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { productId } = req.params;
		const result = await getInventorySnapshot(productId);

		res.status(200).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		next(error);
	}
};