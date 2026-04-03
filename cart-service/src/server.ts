import app from "./app";
import dotenv from 'dotenv';
import { logger } from "./utils/logger";
dotenv.config();
// 1. Get Port from validated environment (defaulting to 3002 for Cart)
const PORT = process.env.PORT || 3002;

// 2. Start the Express Server
const server = app.listen(PORT, () => {
  logger.info(`🚀 Cart Service is running on port ${PORT}`);
  logger.info(`Mode: ${process.env.NODE_ENV}`);
});

/**
 * 3. GRACEFUL SHUTDOWN & ERROR TRACKING
 * These ensure your microservice doesn't leave "ghost" database connections
 * open if it crashes or gets restarted.
 */

// Handle Uncaught Exceptions (e.g., a variable that doesn't exist)
process.on("uncaughtException", (err) => {
  logger.error("Critical: UNCAUGHT EXCEPTION! Shutting down...", {
    message: err.message,
    stack: err.stack,
  });
  // Exit immediately for uncaught exceptions
  process.exit(1);
});

// Handle Unhandled Promise Rejections (e.g., a database timeout)
process.on("unhandledRejection", (err: any) => {
  logger.error("Critical: UNHANDLED REJECTION! Shutting down...", {
    message: err.message,
    stack: err.stack,
  });
  
  // Close the server gracefully before exiting
  server.close(() => {
    process.exit(1);
  });
});

// Handle SIGTERM (e.g., when you stop the service or Docker restarts it)
process.on("SIGTERM", () => {
  logger.info("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    logger.info("Process terminated.");
  });
});