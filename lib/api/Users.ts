import { buildRequest } from "../helpers/requestBuilder";
import { Post, Resource, User } from "../helpers/types";
import { APIRequestContext } from "@playwright/test";

export class UserApi {
  private request: APIRequestContext;
  private url = "users";

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getUsers() {
    return await buildRequest(this.request, this.url, "get");
  }

  async createUser(
    data: User
  ): Promise<{ status: boolean; statusCode: number; body: User }> {
    return await buildRequest(this.request, this.url, "post", data);
  }

  createUserPost(
    data: Resource,
    userId?: number
  ): Promise<{ status: boolean; statusCode: number; body: Post }> {
    const url = this.url + `/${userId}/posts`;
    return buildRequest(this.request, url, "post", data);
  }

  async getUserPosts(
    userId?: number
  ): Promise<{ status: boolean; statusCode: number; body: Post[] }> {
    const url = this.url + `/${userId}/posts`;
    return await buildRequest(this.request, url, "get");
  }

  async getUserById(
    userId?: number
  ): Promise<{ status: boolean; statusCode: number; body: User }> {
    const url = this.url + `/${userId}`;
    return await buildRequest(this.request, url, "get");
  }
  async updateUserById(
    data: Resource,
    userId?: number
  ): Promise<{ status: boolean; statusCode: number; body: User }> {
    const url = this.url + `/${userId}`;
    return await buildRequest(this.request, url, "put", data);
  }

  // body does not work
  async deleteUserById(
    userId?: number
  ): Promise<{ status: boolean; statusCode: number; body }> {
    const url = this.url + `/${userId}`;
    return await buildRequest(this.request, url, "delete");
  }
}
