import { z , ZodError} from "zod";
import { logger } from "./logger.js";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.string().default("3001"),
  DATABASE_URL: z.string(),
  JWT_ACCESS_SECRET: z.string(),
  JWT_REFRESH_SECRET: z.string(),
  JWT_ACCESS_EXPIRES_IN: z.string(),
  JWT_REFRESH_EXPIRES_IN: z.string(),
  EMAIL_HOST: z.string(),
  EMAIL_PORT: z.string().transform(Number),
  EMAIL_USER: z.string(),
  EMAIL_PASS: z.string(),
  EMAIL_FROM: z.string().email(),
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
