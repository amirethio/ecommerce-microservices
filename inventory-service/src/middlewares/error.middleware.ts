import type { Request, Response, NextFunction } from "express";
import {
	PrismaClientKnownRequestError,
	PrismaClientValidationError,
} from "@prisma/client/runtime/client";
import { logger } from "../utils/logger.js";
import { AppError } from "../utils/appError.js";

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
	logger.error(err);

	let statusCode = 500;
	let message = "Something went wrong";
	let errors: Record<string, unknown> = {};

	if (err instanceof AppError) {
		statusCode = err.statusCode;
		message = err.message;
		errors = err.errors;
	} else if (err instanceof PrismaClientKnownRequestError) {
		if (err.code === "P2002") {
			statusCode = 409;
			message = "Duplicate field value entered";
			errors = {
				field: err.meta?.target as string[],
			};
		} else if (err.code === "P2025") {
			statusCode = 404;
			message = "Record not found";
		}
	} else if (err instanceof PrismaClientValidationError) {
		statusCode = 400;
		message = "Validation error";
	}

	res.status(statusCode).json({
		status: "error",
		message,
		errors: Object.keys(errors).length > 0 ? errors : undefined,
		stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
	});
};