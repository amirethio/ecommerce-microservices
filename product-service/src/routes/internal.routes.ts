import express from "express";
import {
  decrementStockInternal,
  getProductsBatchInternal,
  incrementStockInternal,
} from "../controllers/product.controller.js";

const router: express.Router = express.Router();

router.patch("/products/stock/decrement", decrementStockInternal);
router.patch("/products/stock/increment", incrementStockInternal);

export default router;
