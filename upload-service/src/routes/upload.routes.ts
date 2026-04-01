import { Router } from "express";
import { getUploadUrl } from "../controllers/upload.controller";
import { protect } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", protect, getUploadUrl);

export default router;
