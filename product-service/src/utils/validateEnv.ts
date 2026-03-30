import { z, ZodError } from "zod";
import { logger } from "./logger.js";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.string().default("3002"),
  DATABASE_URL: z.string(),
  GATEWAY_URL: z.string(),
  GATEWAY_SECRET: z.string(),
  JWT_ACCESS_SECRET: z.string(),
  JWT_ACCESS_EXPIRES_IN: z.string(),
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
