import { Entity, buildRequest } from "../helpers/requestBuilder";

import { APIRequestContext } from "@playwright/test";
import { userData } from "../data/mocks";

export function postApi (request: APIRequestContext)  {
  
  const entity: Entity = "post";
  const userPosts: Entity = "userPost"

  this.getPosts = async () => {
    return await buildRequest(request, entity, "get", {});
  };

  this.createAPost =  async (data: object) => {
    return await buildRequest(request, userPosts, "post", data);
  };
};
