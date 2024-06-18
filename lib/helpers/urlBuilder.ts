import {APIRequestContext}  from "@playwright/test";

type API = "users" | "posts" | "comments" | "todos";

interface APIAttributes {
  users: { userId?: number };
  posts: { postId?: number };
  comments: {};
  todos: {};
}

interface SegmentTypes {
  posts: 'posts';
  comments: 'comments';
  todos: 'todos';
}

class UrlBuilder<T extends API> {
    private baseURL: string;
    private segments: string;
    private queryParameters: Partial<APIAttributes[T]> = {};
    request: APIRequestContext;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
      }

        // Add resource and query parameters
  addResource(resource: SegmentTypes[T]): URLBuilder<T> {
    this.segments.push(resource);
    return this;
  }
  addQueryParam<K extends keyof APIAttributes[T]>(key: K, value: APIAttributes[T][K]): URLBuilder<T> {
    this.queryParameters[key] = value;
    return this;
  }

        // HTTP Methods
  async get(): Promise<Response> {
    return this.request.get({ method: 'GET' });
  }
  async post(body?: Record<string, any>): Promise<Response> {
    return this.fetch({ method: 'POST', body });
  }
  async put(body?: Record<string, any>): Promise<Response> {
    return this.fetch({ method: 'PUT', body });
  }
  async delete(): Promise<Response> {
    return this.fetch({ method: 'DELETE' });
  }
 
}
