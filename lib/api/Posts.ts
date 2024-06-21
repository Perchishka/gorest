import { APIRequestContext } from "@playwright/test";
import { buildRequest } from "../helpers/requestBuilder";
import { Post, Resource } from "../helpers/types";

export class Posts {
  private request: APIRequestContext;
  private url = "users";

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getPosts() {
    return await buildRequest(this.request, this.url, "get");
  }

  async getPostComments(
    postId?: number
  ): Promise<{ status: boolean; statusCode: number; body: Post | Post[] }> {
    const url = this.url + `/${postId}/comments`;
    return await buildRequest(this.request, url, "get");
  }

  async createPostComments(
    data: Resource,
    postId?: number
  ): Promise<{ status: boolean; statusCode: number; body: Post }> {
    const url = this.url + `/${postId}/comments`;
    return await buildRequest(this.request, url, "post", data);
  }

  async deletePostComments(
    postId?: number
  ): Promise<{ status: boolean; statusCode: number; body: Post }> {
    const url = this.url + `/${postId}/comments`;
    return await buildRequest(this.request, url, "delete");
  }

  async updatePostComments(
    data: Resource,
    postId?: number
  ): Promise<{ status: boolean; statusCode: number; body: Post }> {
    const url = this.url + `/${postId}/comments`;
    return await buildRequest(this.request, url, "put", data);
  }
}
//
