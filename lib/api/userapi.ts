import { APIRequestContext } from "@playwright/test";
import { Entity, buildRequest } from "../helpers/requestBuilder";

export const userApi= (request: APIRequestContext) => {
  const entity: Entity = "user";

  getusers: async () => {
    return await buildRequest(request, entity, "get", {});
  };


};
