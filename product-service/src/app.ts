import express from "express";
import dotenv from "dotenv";
import { validateEnv } from "./utils/validateEnv.js";
import helmet from "helmet";
import productRoutes from "./routes/produtes.routes.js";


// validateEnv();
const app = express();
dotenv.config();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
 
app.use("/api/v1/products", productRoutes);

app.get("/", (req, res) => {
  res.send("this is from product service of port 3002");
});


export default app;
