import request from "supertest";
import app from "../app.js";

describe("메인페이지 로딩", () => {
  test("should contains footballClient", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("footballClient");
  });
});
