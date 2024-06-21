import { BaseApi } from "./BaseApi";

export class CommentApi extends BaseApi {
  url = "todos";

  getComments() {
    return this.getAll<Comment[]>();
  }

  deleteTodoById(commentId: number) {
    return this.remove(commentId);
  }
}
