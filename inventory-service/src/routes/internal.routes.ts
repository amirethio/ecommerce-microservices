import express from "express";
import { getInventoryProduct } from "../controllers/inventory.controller.js";

const router: express.Router = express.Router();

router.get("/products/:productId", getInventoryProduct);

export default router;