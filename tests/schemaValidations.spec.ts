import { fixtures as test } from "../lib/api/apiFixtures";
import { validateSchema } from "../lib/data/schemas/userSchema";
import schema_user from "../lib/data/schemas/users.json";
import schema_post from "../lib/data/schemas/posts.json";
import schema_comment from "../lib/data/schemas/comments.json";
import schema_todo from "../lib/data/schemas/todos.json";

test.describe("Schema validation tests", () => {
  test("Users schema validation", async ({ userApi }) => {
    const response = await userApi.getUsers();
    validateSchema(schema_user, response.body);
  });

  test("Comments schema validation", async ({ commentApi }) => {
    const response = await commentApi.getComments();
    validateSchema(schema_comment, response.body);
  });

  test("Posts schema validation", async ({ postApi }) => {
    const response = await postApi.getPosts();
    console.log(response.body);
    validateSchema(schema_post, response.body);
  });

  test("Todos schema validation", async ({ todoApi }) => {
    const response = await todoApi.getTodos();
    validateSchema(schema_todo, response.body);
  });
});
