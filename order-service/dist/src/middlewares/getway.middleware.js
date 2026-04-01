import { AppError } from "../utils/appError.js";
export const requireGateway = (req, _res, next) => {
    const gatewaySecret = req.headers["x-gateway-secret"];
    const expectedSecret = process.env.GATEWAY_SECRET;
    if (!gatewaySecret || gatewaySecret !== expectedSecret) {
        return next(new AppError("Unauthorized access", 401));
    }
    next();
};
//# sourceMappingURL=getway.middleware.js.map