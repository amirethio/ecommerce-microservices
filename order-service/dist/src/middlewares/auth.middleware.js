import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError.js";
export const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        let token;
        if (authHeader && authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];
        }
        if (!token) {
            return next(new AppError("Not authenticated. Please log in", 401));
        }
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.user = {
            id: decoded.id,
            email: decoded.email,
            role: decoded.role,
        };
        next();
    }
    catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return next(new AppError("Invalid token. Please log in again", 401));
        }
        if (error instanceof jwt.TokenExpiredError) {
            return next(new AppError("Token expired. Please log in again", 401));
        }
        next(error);
    }
};
export const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return next(new AppError("Not authenticated. Please log in", 401));
        }
        if (!roles.includes(req.user.role)) {
            return next(new AppError("You do not have permission to perform this action", 403));
        }
        next();
    };
};
//# sourceMappingURL=auth.middleware.js.map