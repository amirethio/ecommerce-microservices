import express, { Router } from "express";
import { getUploadUrl } from "../controllers/upload.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router: Router = express.Router();

router.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

router.post("/", protect, getUploadUrl);

export default router;
