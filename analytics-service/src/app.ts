import express from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { validateEnv } from "./utils/validateEnv.js";
import "dotenv/config";

const app: express.Application = express();

// Validate environment variables
validateEnv();

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

// API routes
app.get("", async (req, res) => {
	res.send("Analytics Service API");
});

// Health check endpoint
app.get("/health", (req, res) => {
	res.status(200).json({ status: "ok" });
});

export default app;
