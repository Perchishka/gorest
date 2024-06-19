import { test, expect } from "@playwright/test";
import { postData, userData } from "../lib/data/mocks";
import { buildRequest } from "../lib/helpers/requestBuilder";

test.describe("Posts test", () => {

  test("get posts", async ({ request }) => {
    const response = await buildRequest(request, "post", "get", {id: 6940102});
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
  });

  test ("Creates a post comment", async ({request})=> {
    const response = await buildRequest(request, "userPostComments", "post", {id: 6940102, data: "sdsdsd"});
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
  })

  test ("get user's post comments", async ({request})=> {
    const response = await buildRequest(request, "userPostComments", "get", {id: 6972325});
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
  })

  test('get a user post', async ({ request }) => {
    const response = await buildRequest(request, 'userPost', 'get', {id: 6940102});
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
  });


});

