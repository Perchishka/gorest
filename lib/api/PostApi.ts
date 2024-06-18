import { BaseApi } from "./BaseApi";
import { Post, Comment } from "../helpers/types";

export class PostApi extends BaseApi {
  url = "posts";

  getPosts() {
    return this.getAll<Post[]>();
  }

  getPostComments(postId: number) {
    return this.getRelated<Comment[]>(postId, "comments");
  }

  createPostComment(data: Comment, postId: number) {
    return this.createRelated<Comment>(postId, "comments", data);
  }

  deletePostById(postId: number) {
    return this.remove(postId);
  }
}
