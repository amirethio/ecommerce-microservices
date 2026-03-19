import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import { rateLimit } from "express-rate-limit";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";

const app: express.Application = express();

// Set security HTTP headers
app.use(helmet());

// Parse JSON request body
app.use(express.json());

// Parse URL-encoded request body
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Compress response bodies
app.use(compression());

// rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/", limiter);

const routes = {
  "/users": "http://localhost:3001",
  "/products": "http://localhost:3002",
  "/cart": "http://localhost:3003",
  "/orders": "http://localhost:3004",
};



app.get("/", (req, res) => {
  res.send("API Gateway is running on port 3000");
});

Object.entries(routes).forEach(([path, target]) => {
  app.use(
    path,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      on: {
        proxyReq: fixRequestBody,
      },
    }),
  );
});

export default app;
