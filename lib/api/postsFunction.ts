import { buildRequestSwitchCase } from "../helpers/requestBuilder_withswitch";

import { APIRequestContext } from "@playwright/test";
import { Entity, Resource } from "../helpers/types";

export function posts(request: APIRequestContext) {
  const entity: Entity = "post";
  const userPosts: Entity = "userPost";

  return {
    getPosts: async () => {
      return await buildRequestSwitchCase(request, entity, "get", {});
    },

    createPost: async (data: Resource, id: number) => {
      return await buildRequestSwitchCase(request, userPosts, "post", {data, id});
    },
  };
}
