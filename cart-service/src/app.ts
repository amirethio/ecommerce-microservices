import express from "express";
import cors from "cors";
import cartRoutes from "./routes/cart.routes";
import internalRoutes from "./routes/internal.routes";
import { errorHandler } from "./middleware/errorHandler";

import type { Application } from "express";

const app: Application = express();

app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/cart", cartRoutes);
app.use("/internal", internalRoutes);

// ✅ Error handler MUST be last
app.use(errorHandler);

export default app;