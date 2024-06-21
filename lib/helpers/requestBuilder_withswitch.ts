import { APIRequestContext, APIResponse } from "@playwright/test";
import { Entity, Method, Resource } from "./types";

export function getUser(request, options){
buildRequestSwitchCase(request, "user", "get", options)
}


export function buildRequestSwitchCase(
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
  switch (entity) {
    case "user":
      return `users/${id || ''}`;
    case "post":
      return "posts";
    case "comment":
      return "comments";
    case "todo":
      return "todos";
    case "userPost":
      return `users/${id}/posts`;
    case "postComment":
      return `posts/${id}/comments`;
    case "userTodo":
      return `users/${id}/todos`;
  }
}