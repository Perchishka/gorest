import { expect, test } from "@playwright/test";
import { userData } from "../lib/data/mocks/mocks";
import { comments } from "../lib/api/comments";
import { posts } from "../lib/api/posts";
import { users } from "../lib/api/Users";

test.describe("Comments test", () => {
  test("Get list of users", async ({ request }) => {
    const response = await users(request).getUsers();
    console.log(response.status());
    expect(response.ok()).toBeTruthy();
  });

  test("Get comments", async ({ request }) => {
    const response = await comments(request).getComments();
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
  });

  test("get posts", async ({ request }) => {
    const response = await posts(request).getPosts();
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
  });
});
