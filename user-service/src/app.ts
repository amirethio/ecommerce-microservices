import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/user.routes.js";

const app = express();
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is from user service of port 3001");
});

app.use("/v1/auth", authRoutes);

export default app;
