import express from "express";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import wishlistRoutes from "./routes/wishlist.routes";
import internalRoutes from "./routes/internal.routes";
import { errorHandler } from "./middleware/errorHandler";
import { validateEnv } from "./utils/validateEnv";
import { requireGateway } from "./middleware/gatewayMiddleware";

validateEnv();

const app = express();

app.set("trust proxy", true);
app.use(requireGateway);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Wishlist Service",
			version: "1.0.0",
			description: "Wishlist Service API",
		},
	},
	apis: ["./src/routes/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions as any);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/wishlist", wishlistRoutes);
app.use("/internal", internalRoutes);

app.use(errorHandler);

export default app;
