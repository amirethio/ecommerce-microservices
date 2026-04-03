import { z, ZodError } from "zod";
import { logger } from "./logger.js";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.string().default("3004"),
  DATABASE_URL: z.string(),
  GATEWAY_URL: z.string(),
  GATEWAY_SECRET: z.string(),
  JWT_ACCESS_SECRET: z.string(),
  JWT_ACCESS_EXPIRES_IN: z.string(),
  CHAPA_SECRET_KEY: z.string(),
  PRODUCT_SERVICE_URL: z.string(),
  EMAIL_HOST: z.string(),
  EMAIL_PORT: z.string(),
  EMAIL_USER: z.string(),
  EMAIL_PASS: z.string(),
  EMAIL_FROM: z.string(),
});

export function validateEnv() {
  try {
    envSchema.parse(process.env);
    logger.info("Environment variables validated successfully");
  } catch (error) {
    if (error instanceof ZodError) {
      logger.error("Invalid environment variables:", error.issues);
      process.exit(1);
    }
  }
}
