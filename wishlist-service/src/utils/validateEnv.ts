export const validateEnv = () => {
  const requiredVars = ["PORT", "JWT_ACCESS_SECRET", "GATEWAY_SECRET", "DATABASE_URL"];

  const missing = requiredVars.filter((v) => !process.env[v]);
  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(", ")}`);
  }
};
