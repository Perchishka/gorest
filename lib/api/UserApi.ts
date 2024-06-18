import { BaseApi } from "./BaseApi";
import { Post, Todo, User } from "../helpers/types";

export class UserApi extends BaseApi {
  protected url = "users";

  getUsers() {
    return this.getAll<User>();
  }

  createUser(data: User) {
    return this.create(data);
  }

  createUserPost(data: Post, userId: number) {
    return this.createRelated(userId, "posts", data);
  }

  createUserTodo(data: Post, userId: number) {
    return this.createRelated(userId, "todos", data);
  }

  getUserPosts(userId: number) {
    return this.getRelated<Post[]>(userId, "posts");
  }

  getUserTodos(userId: number) {
    return this.getRelated<Todo[]>(userId, "todos");
  }

  getUserById(userId: number) {
    return this.get<User>(userId);
  }

  fullUpdateUserById(data: Partial<User>, userId: number) {
    return this.update(userId, "put", data);
  }

  updateUserById(data: Partial<User>, userId: number) {
    return this.update<Partial<User>>(userId, "patch", data);
  }

  deleteUserById(userId: number) {
    return this.remove(userId);
  }
}
