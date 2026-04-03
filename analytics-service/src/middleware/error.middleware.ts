import type { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger.js";
import { AppError } from "../utils/appError.js";

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	logger.error(err);

	// Default error
	let statusCode = 500;
	let message = "Something went wrong";
	let errors: any = {};

	// Handle AppError instances
	if (err instanceof AppError) {
		statusCode = err.statusCode;
		message = err.message;
		errors = err.errors;
	}

	// Send error response
	res.status(statusCode).json({
		status: "error",
		message,
		errors: Object.keys(errors).length > 0 ? errors : undefined,
		stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
	});
};
