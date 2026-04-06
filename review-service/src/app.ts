import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { rateLimit } from "express-rate-limit";

import reviewRoutes from "./routes/review.routes";

import { errorHandler } from "./middlewares/error.middleware";

const app: express.Application = express();

//GLOBAL MIDDLEWARE

// Parse JSON
app.use(express.json());

// Security headers
app.use(helmet());

// Enable CORS
app.use(cors());

// Compress responses
app.use(compression() as any);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter as any);

//HEALTH CHECK

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
  });
});

//ROUTES

app.use("/api/reviews", reviewRoutes)

//404 HANDLER

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

//GLOBAL ERROR HANDLER

app.use(errorHandler)

export default app;
