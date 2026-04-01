import express from "express";
import {
	createOrder,
	getAllOrders,
	getOrder,
	getUserOrders,
	updateOrderStatus,
} from "../controllers/order.controller.js";
import { protect, restrictTo } from "../middlewares/auth.middleware.js";

const router: express.Router = express.Router();

router.use(protect);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 */
router.post("/", createOrder);

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders for the current user
 *     tags: [Orders]
 */
router.get("/", getUserOrders);

/**
 * @swagger
 * /orders/admin/all:
 *   get:
 *     summary: Get all orders as an admin
 *     tags: [Orders]
 */
router.get("/admin/all", restrictTo("ADMIN"), getAllOrders);

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get a single order
 *     tags: [Orders]
 */
router.get("/:id", getOrder);

/**
 * @swagger
 * /orders/{id}/status:
 *   patch:
 *     summary: Update order status
 *     tags: [Orders]
 */
router.patch("/:id/status", restrictTo("ADMIN"), updateOrderStatus);

export { router as orderRoutes };