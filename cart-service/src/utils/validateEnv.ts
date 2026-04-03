import { z } from "zod";
import { logger } from "./logger";

/**
 * Cart Service Environment Schema
 * Only includes variables strictly necessary for Cart operations.
 */
const cartEnvSchema = z.object({
  // Node Environment
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  
  // Port for this specific service (e.g., 3002)
  PORT: z.string().default("3002"),
  
  // Database connection for the Cart DB
  DATABASE_URL: z.string().url(),

  // The Cart service needs the JWT Secret to verify the user from the Gateway
  JWT_ACCESS_SECRET: z.string().min(32),

  // If the Cart service calls the Product service to check stock, it needs this URL
  PRODUCT_SERVICE_URL: z.string().url().default("http://localhost:3001"),

  // Service Name for our Logger
  SERVICE_NAME: z.string().default("cart-service"),
});

// Export the Type for use in your controllers/services
export type CartEnv = z.infer<typeof cartEnvSchema>;

export function validateEnv(): CartEnv {
  try {
    // .parse() will throw an error if any variables are missing or malformed
    const config = cartEnvSchema.parse(process.env);
    
    logger.info("Cart Service environment variables validated successfully");
    
    return config;
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.error("Invalid Cart Service environment variables:");
      
      error.errors.forEach((err) => {
        logger.error(`   - ${err.path.join(".")}: ${err.message}`);
      });

      // Exit immediately. A microservice with missing config is a "Zombie" service.
      process.exit(1);
    }
    throw error;
  }
}