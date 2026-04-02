import request from "supertest";
import app from "../app";

describe("Wishlist Service", () => {
  it("health check through internal route", async () => {
    const res = await request(app).get("/internal/health");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "ok");
  });
});
