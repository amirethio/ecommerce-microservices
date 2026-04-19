import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { addWishlistItem, getWishlist, removeWishlistItem } from "../controllers/wishlist.controller.js";

const router = Router();

router.use(authMiddleware);

router.get("/", getWishlist);
router.post("/", addWishlistItem);
router.delete("/:productId", removeWishlistItem);

export default router;
