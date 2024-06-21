import { buildRequestSwitchCase } from "../helpers/requestBuilder_withswitch";

import { APIRequestContext } from "@playwright/test";
import { Entity, Resource } from "../helpers/types";

export function comments(request: APIRequestContext) {
  const commentsEntity: Entity = "comment";
  const postComment: Entity = "postComment";

  return {
    getComments: async () => {
      return await buildRequestSwitchCase(request, commentsEntity, "get", {});
    },

    createPostComment: async (data: Resource, id: number) => {
      return await buildRequestSwitchCase(request, postComment, "post", {data, id});
    },

    getPostComments: async (post_id: number) => {
      return await buildRequestSwitchCase(request, postComment, "get", {id: post_id});
    },



  };
}
