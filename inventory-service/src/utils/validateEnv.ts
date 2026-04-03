import { z } from "zod";

const envSchema = z.object({
	DATABASE_URL: z.string().min(1),
	GATEWAY_SECRET: z.string().min(1),
	JWT_ACCESS_SECRET: z.string().min(1),
	PORT: z.string().optional(),
});

export const validateEnv = () => {
	envSchema.parse(process.env);
};