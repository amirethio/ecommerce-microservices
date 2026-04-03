import { logger } from "./logger.js";

async function seed() {
  logger.info("Order service seed is currently a placeholder.");
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    logger.error("Failed to run order seed:", error);
    process.exit(1);
  });
