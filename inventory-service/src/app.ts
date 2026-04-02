import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import "dotenv/config";
import inventoryRoutes from "./routes/inventory.routes.js";
import internalRoutes from "./routes/internal.routes.js";
import { validateEnv } from "./utils/validateEnv.js";
import { requireGateway } from "./middlewares/getway.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { logger } from "./utils/logger.js";

validateEnv();

const app: express.Application = express();

app.set("trust proxy", true);
app.use(requireGateway);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(morgan("combined", { stream: { write: (message) => logger.info(message.trim()) } }));

const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Inventory Service",
			version: "1.0.0",
			description: "Inventory Service API",
		},
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
				},
			},
		},
	},
	apis: ["./src/routes/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions as any);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/health", (_req, res) => {
	res.status(200).json({ status: "ok" });
});

app.use("/", inventoryRoutes);
app.use("/internal", internalRoutes);

app.use(errorHandler);

export default app;