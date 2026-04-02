import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError.js";

declare global {
	namespace Express {
		interface Request {
			user?: {
				id: string;
				email: string;
				role: string;
			};
		}
	}
}

export const protect = (req: Request, _res: Response, next: NextFunction) => {
	try {
		const authHeader = req.headers.authorization;
		let token: string | undefined;

		if (authHeader && authHeader.startsWith("Bearer")) {
			token = authHeader.split(" ")[1];
		}

		if (!token) {
			return next(new AppError("Not authenticated. Please log in", 401));
		}

		const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET!) as {
			id: string;
			email: string;
			role: string;
		};

		req.user = {
			id: decoded.id,
			email: decoded.email,
			role: decoded.role,
		};

		next();
	} catch (error) {
		if (error instanceof jwt.JsonWebTokenError) {
			return next(new AppError("Invalid token. Please log in again", 401));
		}

		if (error instanceof jwt.TokenExpiredError) {
			return next(new AppError("Token expired. Please log in again", 401));
		}

		next(error);
	}
};

export const restrictTo = (...roles: string[]) => {
	return (req: Request, _res: Response, next: NextFunction) => {
		if (!req.user) {
			return next(new AppError("Not authenticated. Please log in", 401));
		}

		if (!roles.includes(req.user.role)) {
			return next(new AppError("You do not have permission to perform this action", 403));
		}

		next();
	};
};