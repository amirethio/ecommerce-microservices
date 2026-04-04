import express from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { validateEnv } from "./utils/validateEnv.js";
import "dotenv/config";
import { requireGateway } from "./middleware/getway.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";
import analyticsRoutes from "./routes/analytics.route.js";

const app: express.Application = express();

// Validate environment variables
validateEnv();

app.set("trust proxy", true);
app.use(requireGateway);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// Swagger documentation
const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Anaytics Service API",
			version: "1.0.0",
			description: "Analytics Service API",
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

// Health check endpoint
app.get("/health", (req, res) => {
	res.status(200).json({ status: "ok" });
});

// API routes
app.use("/", analyticsRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
