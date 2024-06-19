import { APIRequestContext } from "@playwright/test";
import { Entity, buildRequest } from "../helpers/requestBuilder";
import { userData } from "../data/mocks";

export function userApi (request: APIRequestContext)  {
  const entity: Entity = "user";

  this.getusers = async () => {
    return await buildRequest(request, entity, "get", {});
  };

  this.createAUser =  async () => {
    return await buildRequest(request, entity, "post", {data:userData.validUser()});
  };
};
