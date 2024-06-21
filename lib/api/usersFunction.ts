import {buildRequestSwitchCase } from "../helpers/requestBuilder_withswitch";
import { APIRequestContext } from "@playwright/test";
import { Entity, Resource } from "../helpers/types";


export function users(request: APIRequestContext) {
  const usersEntity: Entity = "user";
  const usersPosts: Entity = "userPost";

  return {
    getUsers: async () => {
      return await buildRequestSwitchCase(request, usersEntity, "get", {});
    },

    createUser: async (data: Resource) => {
      return await buildRequestSwitchCase(request, usersEntity, "post", {data});
    },

    getUserById: async (id: number) => {
      return await buildRequestSwitchCase(request, usersEntity, "get", {id});
    },

    updateUserById: async (data: Resource, id: number) => {
      return await buildRequestSwitchCase(request, usersEntity, "put", {data, id});
    },

    deleteById: async (id: number) => {
      return await buildRequestSwitchCase(request, usersEntity, "delete", { id});
    },

    getUsersPost: async (id: number) => {
      return await buildRequestSwitchCase(request, usersPosts, "get", {id});
    },
  };
}
