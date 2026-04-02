import type { Request, Response, NextFunction } from "express";
import { PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { AppError } from "../utils/appError";
import { logger } from "../utils/logger";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  logger.error(err);

  let statusCode = 500;
  let message = "Something went wrong";
  let errors: any = undefined;

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errors = err.errors;
  } else if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      statusCode = 409;
      message = "Duplicate field value";
      errors = { fields: err.meta?.target };
    }
    if (err.code === "P2025") {
      statusCode = 404;
      message = "Resource not found";
    }
  } else if (err instanceof PrismaClientValidationError) {
    statusCode = 400;
    message = "Invalid data provided";
  } else if (err instanceof PrismaClientInitializationError) {
    statusCode = 503;
    message = "Database is unavailable. Ensure PostgreSQL is running and migrations are applied";
  }

  res.status(statusCode).json({
    status: "error",
    message,
    ...(errors && { errors }),
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
