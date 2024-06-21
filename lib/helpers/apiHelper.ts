import { APIResponse, expect } from "@playwright/test";
import { UserApi } from "../api/Users";
import { postData, userData } from "../data/mocks/mocks";
import { randomEmail } from "./randomiser";

export async function validateErrorMessage(
  body: {},
  field: string,
  errorMessage: string
) {
  expect(body).toMatchObject([
    {
      field: field,
      message: errorMessage,
    },
  ]);
}

export async function createUserWithEmail(userApi: UserApi) {
  const email = randomEmail();
  const { body: user } = await userApi.createUser(
    userData.customUser({ email: email })
  );
  return user;
}

export async function createUserWithPost(userApi: UserApi) {
  const user = await createUserWithEmail(userApi);
  const post = await userApi.createUserPost(
    postData.customPost({ email: user.email }),
    user.id
  );
  return { email: user.email, id: user.id, post };
}
