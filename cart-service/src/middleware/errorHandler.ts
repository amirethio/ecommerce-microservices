import type { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";
import { AppError } from "../utils/appError";
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Log full error
  logger.error(err);

  let statusCode = 500;
  let message = "Something went wrong";
  let errors: any = undefined;

  // ✅ Custom AppError
  if (err instanceof AppError) {
    const appError = err as AppError;
    statusCode = appError.statusCode;
    message = appError.message;
    errors = appError.errors;
  }

  // ✅ Prisma Known Errors
  else if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      statusCode = 409;
      message = "Duplicate field value";
      errors = {
        fields: err.meta?.target,
      };
    }

    if (err.code === "P2025") {
      statusCode = 404;
      message = "Resource not found";
    }
  }

  // ✅ Prisma Validation Error
  else if (err instanceof PrismaClientValidationError) {
    statusCode = 400;
    message = "Invalid data provided";
  }

  // ✅ Prisma initialization / connectivity errors
  else if (err instanceof PrismaClientInitializationError) {
    statusCode = 503;
    message =
      "Database is unavailable. Ensure PostgreSQL is running and migrations are applied";
  }

  // ✅ Final Response
  res.status(statusCode).json({
    status: "error",
    message,
    ...(errors && { errors }),
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};