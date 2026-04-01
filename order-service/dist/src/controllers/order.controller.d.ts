import type { NextFunction, Request, Response } from "express";
export declare const createOrder: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getUserOrders: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getOrder: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateOrderStatus: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getAllOrders: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=order.controller.d.ts.map