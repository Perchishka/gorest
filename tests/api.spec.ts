import { test, expect } from "@playwright/test";

test.describe("Book Store Application - Profile - Admin", () => {
  test("should create a bug report", async ({ request }) => {
    const response = await request.get ('users');
    console.log(response.status());
    expect(response.ok()).toBeTruthy();
  });
});
