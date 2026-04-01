import express from "express";
import helmet from "helmet";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import "dotenv/config";
import { validateEnv } from "./utils/validateEnv.js";
import { requireGateway } from "./middlewares/getway.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { orderRoutes } from "./routes/order.routes.js";
import internalRoutes from "./routes/internal.routes.js";
validateEnv();
const app = express();
app.set("trust proxy", true);
app.use(requireGateway);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Order Service",
            version: "1.0.0",
            description: "Order Service API",
        },
        servers: [
            {
                url: "https://ecommerce-backend-tqgh.onrender.com/api/v1",
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/orders", orderRoutes);
app.use("/internal", internalRoutes);
app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map