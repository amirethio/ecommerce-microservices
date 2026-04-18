import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { cartRoutes } from "./routes/cart.routes.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use("/", cartRoutes);

export default app;
