import express from "express";
import { createOrder, getAllOrders, getOrder, getUserOrders, updateOrderStatus, } from "../controllers/order.controller.js";
import { protect, restrictTo } from "../middlewares/auth.middleware.js";
const router = express.Router();
router.use(protect);
router.post("/", createOrder);
router.get("/", getUserOrders);
router.get("/admin/all", restrictTo("ADMIN"), getAllOrders);
router.get("/:id", getOrder);
router.patch("/:id/status", restrictTo("ADMIN"), updateOrderStatus);
export { router as orderRoutes };
//# sourceMappingURL=order.routes.js.map