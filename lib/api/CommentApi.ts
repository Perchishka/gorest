import { BaseApi } from "./BaseApi";
import { Comment } from "../helpers/types";
export class CommentApi extends BaseApi {
  url = "comments";

  getComments() {
    return this.getAll<Comment>();
  }

  deleteTodoById(commentId: number) {
    return this.remove(commentId);
  }
}
