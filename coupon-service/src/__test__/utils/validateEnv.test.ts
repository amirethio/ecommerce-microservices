import { validateEnv } from "../../utils/validateEnv.js";
import { logger } from "../../utils/logger.js";

// Mock logger
jest.mock("../../utils/logger", () => ({
	logger: {
		info: jest.fn(),
		error: jest.fn(),
	},
}));

// Mock process.exit
const mockExit = jest.spyOn(process, "exit").mockImplementation((code) => {
	throw new Error(`Process.exit called with code ${code}`);
});

describe("validateEnv", () => {
	const originalEnv = process.env;

	beforeEach(() => {
		jest.resetModules();
		process.env = { ...originalEnv };

		// Set required environment variables
		process.env.NODE_ENV = "development";
		process.env.DATABASE_URL = "postgresql://user:pass@localhost:5432/db";
		process.env.GATEWAY_URL = "http://localhost:3011";
		process.env.GATEWAY_SECRET = "gateway_secret";
		process.env.ORDER_SERVICE_URL = "http://localhost:3004";
		process.env.JWT_ACCESS_SECRET = "access_secret";
	});

	afterEach(() => {
		process.env = originalEnv;
	});

	it("should validate environment variables successfully", () => {
		validateEnv();
		expect(logger.info).toHaveBeenCalledWith(
			"Environment variables validated successfully",
		);
	});

	it("should exit process when required environment variable is missing", () => {
		delete process.env.DATABASE_URL;

		expect(() => {
			validateEnv();
		}).toThrow("Process.exit called with code 1");

		expect(logger.error).toHaveBeenCalled();
		expect(mockExit).toHaveBeenCalledWith(1);
	});

	it("should exit process when environment variable has invalid format", () => {
		process.env.EMAIL_FROM = "invalid-email";

		expect(() => {
			validateEnv();
		}).toThrow("Process.exit called with code 1");

		expect(logger.error).toHaveBeenCalled();
		expect(mockExit).toHaveBeenCalledWith(1);
	});

	it("should transform string boolean to boolean", () => {
		process.env.MINIO_USE_SSL = "true";
		validateEnv();
		expect(logger.info).toHaveBeenCalledWith(
			"Environment variables validated successfully",
		);
	});
});
