import { test, expect } from "@playwright/test";
import { postData, todosData, userData } from "../lib/data/mocks";
import { buildRequest } from "../lib/helpers/requestBuilder";

test.describe("Todos test", () => {

  test("get todos", async ({ request }) => {
    const response = await buildRequest(request, "post", "get", {id: 6940102});
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
  });

  test('get a user todos', async ({ request }) => {
    const response = await buildRequest(request, 'userTodos', 'get', {id: 6940102});
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
  });

  test('Creates a user todo', async ({ request }) => {
    const response = await buildRequest(request, 'userTodos', 'post', {data: todosData.validTodo(), id: 6940102});
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
  });


});

