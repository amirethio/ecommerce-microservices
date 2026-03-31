import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cartRoutes from "./routes/cart.routes";
import internalRoutes from "./routes/internal.routes";

dotenv.config();

import type { Application } from "express";
const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/cart", cartRoutes);
app.use("/internal", internalRoutes);

export default app;
