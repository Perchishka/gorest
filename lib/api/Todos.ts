import { BaseApi } from "./BaseApi";
import { Todo } from "../helpers/types";

export class TodoApi extends BaseApi {
  url = "todos";

  getTodos() {
    return this.getAll<Todo[]>();
  }

  deleteTodoById(todoId: number) {
    return this.remove(todoId);
  }
}
