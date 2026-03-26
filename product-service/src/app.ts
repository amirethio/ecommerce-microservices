import express from "express";
import { validateEnv } from "./utils/validateEnv.js";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import productRoutes from "./routes/produtes.routes.js";
import "dotenv/config";
import { requireGateway } from "./middlewares/getway.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";

// Validate environment variables
validateEnv();

const app: express.Application = express();

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
			title: "Product Service",
			version: "1.0.0",
			description: "Product Service API",
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

// API routes
app.use("/", productRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
	res.status(200).json({ status: "ok" });
});

// Error handling middleware
app.use(errorHandler);

export default app;
