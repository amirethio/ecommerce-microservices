import { AppError } from "../utils/appError";

describe("Order Service Basics", () => {
	it("creates AppError correctly", () => {
		const err = new AppError("Order error", 400, { field: "shippingAddress" });

		expect(err.message).toBe("Order error");
		expect(err.statusCode).toBe(400);
		expect(err.errors.field).toBe("shippingAddress");
	});
});
