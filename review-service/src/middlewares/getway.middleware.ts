import { Request, Response, NextFunction } from "express";

export const requireGateway = (
	req: Request,
	_res: Response,
	next: NextFunction,
) => {
	const gatewaySecret = req.headers["x-gateway-secret"];
	const expectedSecret = process.env.GATEWAY_SECRET;

	if (!gatewaySecret || gatewaySecret !== expectedSecret) {
		throw new Error("Unauthorized access");
	}

	next();
};
