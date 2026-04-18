import express from "express";
import helmet from "helmet";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { validateEnv } from "./utils/validateEnv.js";
import { requireGateway } from "./middlewares/gateway.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import uploadRoutes from "./routes/upload.routes.js";
import internalRoutes from "./routes/internal.routes.js";
import type { Express } from "express";

validateEnv();

const app: Express = express();

app.set("trust proxy", true);
app.use(requireGateway);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Upload Service",
			version: "1.0.0",
			description: "Upload Service API",
		},
	},
	apis: ["./src/routes/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions as any);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/upload", uploadRoutes);
app.use("/internal", internalRoutes);

app.use(errorHandler);

export default app;
