import dotenv from "dotenv";
import app from "./app";
import { validateEnv } from "./utils/validateEnv";
import { logger } from "./utils/logger";
import prisma from "./config/db";

dotenv.config();

// ✅ Validate environment variables BEFORE starting
validateEnv();

const PORT = Number(process.env.PORT) || 4004;

const startServer = async () => {
  try {
    await prisma.$connect();
    logger.info("Database connected successfully");

    app.listen(PORT, () => {
      logger.info(`Cart service running on port ${PORT}`);
    });
  } catch (error) {
    logger.error("Failed to connect to database", {
      error: error instanceof Error ? error.message : String(error),
    });
    process.exit(1);
  }
};

startServer();