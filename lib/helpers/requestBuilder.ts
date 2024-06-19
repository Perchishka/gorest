import { APIRequestContext, APIResponse } from "@playwright/test";

export function buildRequest(
  request: APIRequestContext,
  entity: Entity,
  method: Method,
  options: {
    id?: number;
    data?: Resource;
  }
): Promise<APIResponse> {
  const url = urlFromEntity(entity, options.id);

  let data = options.data;

  if (method in ["get", "delete"]) {
    data = undefined;
  }

  const r = request[method](url, { data });
  console.log({ method, url, data });
  return r;
}

function urlFromEntity(entity: Entity, id?: number) {
  //USERS
    if (entity === "userPost" && id != null) {
    return `users/${id}/posts`;
  }

  if (entity === "user") {
    return "users";
  }

  //TODOS
  if (entity === "userTodos") {
    return `users/${id}/todos`;
  }
  
 //POSTS 65
  if (entity === "post") {
    return "posts";
  }

   //COMMENTS
  if ( entity === "userPostComments"&& id != null){
    return `posts/${id}/comments`;
  }

  return "";
}

export type Entity = "user" | "post" | "comments"| "todos"| "userPost" | "userPostComments" | "userTodos";

type Method = "get" | "post" |"put" | "patch" | "delete";

type Post = {};

type User = {};

type Resource = Post | User;
