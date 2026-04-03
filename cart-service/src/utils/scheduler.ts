import cron from "node-cron";
import { generateDailyStats } from "../controllers/analytics.controller";
import { logger } from "./logger";

/**
 * Orchestrates all background scheduled tasks for the service.
 * Call this function in your server.ts/app.ts during startup.
 */
export const startScheduledJobs = () => {
  // 1. Daily Analytics Generation
  // Pattern: "0 1 * * *" runs every day at 1:00 AM
  cron.schedule("0 1 * * *", async () => {
    logger.info("Cron Job Triggered: Starting Daily Stats Generation");

    const startTime = Date.now();
    try {
      await generateDailyStats();
      
      const duration = Date.now() - startTime;
      logger.info(`Cron Job Completed: Daily stats generated in ${duration}ms`);
    } catch (error: any) {
      // Use the logger pattern we established to capture the full error
      logger.error("Cron Job Failed: Generate daily stats error", {
        error: error.message,
        stack: error.stack,
      });
    }
  });

  // You can add more jobs here, like cleaning up old logs or expired cart items
  // cron.schedule("0 0 * * 0", async () => { ... }); // Weekly cleanup

  logger.info("All scheduled background jobs have been initialized");
};