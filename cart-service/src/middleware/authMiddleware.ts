import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: { id: string };
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const headerUserId = req.header("x-user-id");
  if (headerUserId) {
    req.user = { id: headerUserId };
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      status: "error",
      message:
        "Missing user context. Use x-user-id header or Authorization Bearer token",
    });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Invalid Authorization header",
    });
  }

  const secret = process.env.JWT_ACCESS_SECRET;
  if (!secret) {
    return res.status(500).json({
      status: "error",
      message: "JWT_ACCESS_SECRET is not configured",
    });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const payload = decoded as JwtPayload;
    const tokenUserId = payload.id ?? payload.sub;

    if (!tokenUserId) {
      return res.status(401).json({
        status: "error",
        message: "Invalid token payload",
      });
    }

    req.user = { id: String(tokenUserId) };
    return next();
  } catch (_err) {
    return res.status(401).json({
      status: "error",
      message: "Invalid or expired token",
    });
  }
};