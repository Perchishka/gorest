import { fixtures as test } from "../lib/api/apiFixtures";
import { comments_schema } from "../lib/data/schemas/comments";
import { posts_schema } from "../lib/data/schemas/posts";
import { todos_schema } from "../lib/data/schemas/todos";
import { validateSchema } from "../lib/data/schemas/userSchema";
import { user_schema } from "../lib/data/schemas/users";

test.describe("Schema validation tests", () => {
  test("Users schema validation", async ({ userApi }) => {
    const response = await userApi.getUsers();
    validateSchema(user_schema, response.body);
  });

  test("Comments schema validation", async ({ commentApi }) => {
    const response = await commentApi.getComments();
    validateSchema(comments_schema, response.body);
  });

  test("Posts schema validation", async ({ postApi }) => {
    const response = await postApi.getPosts();

    validateSchema(posts_schema, response.body);
  });

  test("Todos schema validation", async ({ todoApi }) => {
    const response = await todoApi.getTodos();
    validateSchema(todos_schema, response.body);
  });
});
