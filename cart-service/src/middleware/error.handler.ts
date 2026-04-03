import type { Request, Response, NextFunction } from "express"
import { Prisma } from "@prisma/client"
import { logger } from "../utils/logger"
import { AppError } from "../utils/appError"
import axios from "axios" // Add this

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err)

  let statusCode = 500
  let message = "Something went wrong"
  let errors: any = {}

  // 1. Handle AppError (Your custom logic)
  if (err instanceof AppError) {
    statusCode = err.statusCode
    message = err.message
    errors = err.errors
  } 
  
  // 2. NEW: Handle Axios/Service Communication Errors
  else if (axios.isAxiosError(err)) {
    statusCode = err.response?.status || 502 // 502 = Bad Gateway
    message = err.response?.data?.message || "Dependency Service Unavailable"
    errors = { service: "External Service Communication Failed" }
  }

  // 3. Handle Prisma errors (Local to this specific service)
  else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      statusCode = 409
      message = "Duplicate field value entered"
    } else if (err.code === "P2025") {
      statusCode = 404
      message = "Record not found"
    }
  }

  // Send consistent error response
  res.status(statusCode).json({
    status: "error",
    message,
    errors: Object.keys(errors).length > 0 ? errors : undefined,
    // Hide stack traces in production!
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  })
}