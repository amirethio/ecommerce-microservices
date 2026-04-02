import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError.js";

export const requireGateway = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const gatewaySecret = req.headers["x-gateway-secret"];
  const expectedSecret = process.env.GATEWAY_SECRET;

  if (!gatewaySecret || gatewaySecret !== expectedSecret) {
    return next(new AppError("Unauthorized access", 401));
  }

  next();
};
