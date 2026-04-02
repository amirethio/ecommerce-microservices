import { logger } from "./logger";

export const validateEnv = () => {
  const requiredEnv = [
    "DATABASE_URL",
  ];

  for (const key of requiredEnv) {
    if (!process.env[key]) {
      logger.error(`Missing environment variable: ${key}`);
      process.exit(1);
    }
  }

  logger.info("Environment variables validated successfully");
};