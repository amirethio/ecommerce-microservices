import { z, ZodError } from "zod";
import { logger } from "./logger.js";

const envSchema = z.object({
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),
	PORT: z.string().default("3010"),
	GATEWAY_URL: z.string(),
	GATEWAY_SECRET: z.string(),
	JWT_ACCESS_SECRET: z.string(),
	ORDER_SERVICE_URL: z.string(),
	PRODUCT_SERVICE_URL: z.string(),
	USER_SERVICE_URL: z.string(),
});

export function validateEnv() {
	try {
		envSchema.parse(process.env);
		logger.info("Environment variables validated successfully");
	} catch (error) {
		if (error instanceof ZodError) {
			logger.error("Invalid environment variables:", error.issues);
			console.log("sth is happen while validating the schema");

			process.exit(1);
		}
	}
}
