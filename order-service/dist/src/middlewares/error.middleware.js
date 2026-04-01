import { logger } from "../utils/logger.js";
import { AppError } from "../utils/appError.js";
import { PrismaClientKnownRequestError, PrismaClientValidationError, } from "@prisma/client/runtime/client";
export const errorHandler = (err, req, res, next) => {
    logger.error(err);
    let statusCode = 500;
    let message = "Something went wrong";
    let errors = {};
    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
        errors = err.errors;
    }
    else if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
            statusCode = 409;
            message = "Duplicate field value entered";
            errors = {
                field: err.meta?.target,
            };
        }
        else if (err.code === "P2025") {
            statusCode = 404;
            message = "Record not found";
        }
    }
    else if (err instanceof PrismaClientValidationError) {
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
//# sourceMappingURL=error.middleware.js.map