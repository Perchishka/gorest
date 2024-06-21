import { test as base } from "@playwright/test";
import { UserApi } from "./Users";
import { PostApi } from "./posts";
import { CommentApi } from "./Comments";
import { TodoApi } from "./Todos";

type ApiFixtures = {
  userApi: UserApi;
  postApi: PostApi;
  commentApi: CommentApi;
  todoApi: TodoApi;
};

const fixtures = base.extend<ApiFixtures>({
  userApi: async ({ request }, use) => {
    const userApi = new UserApi(request);
    await use(userApi);
  },

  postApi: async ({ request }, use) => {
    const postApi = new PostApi(request);
    await use(postApi);
  },

  commentApi: async ({ request }, use) => {
    const commentApi = new CommentApi(request);
    await use(commentApi);
  },

  todoApi: async ({ request }, use) => {
    const todoApi = new TodoApi(request);
    await use(todoApi);
  },
});

export { fixtures };
