import { expect } from "@playwright/test";
import { fixtures as test } from "../lib/api/apiFixtures";
import { users } from "../lib/api/usersFunction";
import { userData } from "../lib/data/mocks/mocks";
import { validateErrorMessage } from "../lib/helpers/apiHelper";

test.describe("Users test negative scenarious", () => {
  const invalidEmail = ["Alice", "@", 1223];
  for (const emailInvalid of invalidEmail) {
    test(`Create user with wrong email: ${emailInvalid}`, async ({
      userApi,
    }) => {
      const response = await userApi.createUser(
        userData.customUser({ email: emailInvalid })
      );
      expect(response.statusCode === 422).toBeTruthy();
      await validateErrorMessage(response, "email", "is invalid");
    });
  }

  test("Create user with empty email", async ({ request }) => {
    const response = await users(request).createUser(
      userData.customUser({ email: "  " })
    );
    expect(response.status() === 422).toBeTruthy();
    await validateErrorMessage(response, "email", "can't be blank");
  });

  test("Create user with existing email", async ({ request }) => {
    const emailResponse = await users(request).createUser(
      userData.customUser({})
    );
    const body = await emailResponse.json();
    const response = await users(request).createUser(
      userData.customUser({ email: body.email })
    );
    await validateErrorMessage(response, "email", "has already been taken");
  });

  test("Create user with empty name", async ({ request }) => {
    const response = await users(request).createUser(
      userData.customUser({ name: "  " })
    );
    expect(response.status() === 422).toBeTruthy();
    await validateErrorMessage(response, "name", "can't be blank");
  });

  test("Create user with empty status", async ({ request }) => {
    const response = await users(request).createUser(
      userData.customUser({ status: "  " })
    );
    expect(response.status() === 422).toBeTruthy();
    await validateErrorMessage(response, "status", "can't be blank");
  });

  const invalidStatus = ["Alice", "@", 1223, {}, ["sdsd", "sdsd"]];
  for (const statusInvalid of invalidStatus) {
    test(`Create user with ${statusInvalid} status`, async ({ request }) => {
      const response = await users(request).createUser(
        userData.customUser({ status: statusInvalid })
      );
      expect(response.status() === 422).toBeTruthy();
      await validateErrorMessage(response, "status", "can't be blank");
    });
  }

  const invalidGender = ["Alice", "@", 1223, "женский", " "];
  for (const gender of invalidGender) {
    test(`Create user with ${gender} gender`, async ({ request }) => {
      const response = await users(request).createUser(
        userData.customUser({ gender: gender })
      );
      expect(response.status() === 422).toBeTruthy();
      await validateErrorMessage(
        response,
        "gender",
        "can't be blank, can be male of female"
      );
    });
  }

  // test("Get  details of not existing user", async ({ userApi }) => {
  //   const response = await userApi.getUserById(1234);
  //   expect.soft(Array.isArray(response.body)).toBeFalsy();
  //   expect.soft(response.statusCode === 200).toBeTruthy();
  //   expect.soft(response.body.email).toBe(email);
  //   expect(test.info().errors).toHaveLength(0);
  // });

  //DOES NOT WORK PROPERLY
  test("Retrieve posts when user does not exist", async ({ request }) => {
    const response = await users(request).getUsersPost(123);
    console.log(response.status());
    expect(response.status() === 404).toBeTruthy();
  });

  test("Delete not existing user", async ({ request }) => {
    const response = await users(request).deleteById(123);
    console.log(response.status());
    expect(response.status() === 404).toBeTruthy();
  });

  //comments
  test("Retrieves posts comments when user does not have any posts", async ({
    request,
  }) => {
    //change the body
    const user = await users(request).createUser(userData.customUser({}));
    const userBody = await user.json();
    const userPosts = await users(request).getUsersPost(userBody.id);
    const userPostBody = await userPosts.json();
    expect(userPostBody.length).toBe(0);
  });
});
