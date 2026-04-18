import express, { Router } from "express";
import { getUploadUrl } from "../controllers/upload.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router: Router = express.Router();

router.post("/", protect, getUploadUrl);

export default router;
