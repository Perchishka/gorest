import { expect } from "@playwright/test";
import { fixtures as test } from "../lib/api/apiFixtures";
import { postData, userData } from "../lib/data/mocks/mocks";
import { randomEmail } from "../lib/helpers/randomiser";

test.describe("Users test", () => {
  test("Create user", async ({ userApi }) => {
    const email = randomEmail();
    const response = await userApi.createUser(
      userData.customUser({ email: email })
    );
    expect.soft(response.status).toBeTruthy();
    expect.soft(response.statusCode === 201).toBeTruthy();
    expect.soft(Array.isArray(response.body)).toBeFalsy();
    expect.soft(response.body.gender).toBe("female");
    expect.soft(response.body.email).toBe(email);
    expect.soft(response.body.name).toBe("Custom name");
    expect.soft(response.body.status).toBe("active");
    expect(test.info().errors).toHaveLength(0);
  });

  test("Get user details", async ({ userApi }) => {
    const email = randomEmail();
    const user = await userApi.createUser(
      userData.customUser({ email: email })
    );
    const response = await userApi.getUserById(user.body.id);
    expect.soft(Array.isArray(response.body)).toBeFalsy();
    expect.soft(response.statusCode === 200).toBeTruthy();
    expect.soft(response.body.email).toBe(email);
    expect(test.info().errors).toHaveLength(0);
  });

  test("Update user details", async ({ userApi }) => {
    const email = randomEmail();
    const user = await userApi.createUser(
      userData.customUser({ email: email })
    );
    const updatedEmail = randomEmail();
    const response = await userApi.updateUserById(
      userData.updateFieldsUser({ email: updatedEmail }),
      user.body.id
    );
    expect.soft(response.status).toBeTruthy();
    expect.soft(response.statusCode === 200).toBeTruthy();
    expect.soft(Array.isArray(response.body)).toBeFalsy();
    expect.soft(response.body.gender).toBe("male");
    expect.soft(response.body.email).toBe(updatedEmail);
    expect.soft(response.body.name).toBe("Updated user");
    expect.soft(response.body.status).toBe("inactive");
    expect(test.info().errors).toHaveLength(0);
  });

  test("Create user post", async ({ userApi }) => {
    const email = randomEmail();
    const user = await userApi.createUser(
      userData.customUser({ email: email })
    );
    const response = await userApi.createUserPost(
      postData.validPost({ user_id: user.body.id }),
      user.body.id
    );
    expect.soft(response.status).toBeTruthy();
    expect.soft(response.statusCode === 201).toBeTruthy();
    expect.soft(response.body.title).toBe("Valid Post title");
    expect.soft(response.body.body).toBe("Valid post body");
    expect.soft(response.body.user_id).toBe(user.body.id);
    expect(test.info().errors).toHaveLength(0);
  });

  test("Retrieves user posts when user does not have any posts", async ({
    userApi,
  }) => {
    const email = randomEmail();
    const user = await userApi.createUser(
      userData.customUser({ email: email })
    );
    const userPosts = await userApi.getUserPosts(user.body.id);
    expect.soft(Array.isArray(userPosts.body)).toBeTruthy();
    expect.soft(userPosts.body.length).toBe(0);
    expect(test.info().errors).toHaveLength(0);
  });

  test("Retrieves user posts when user has some posts", async ({ userApi }) => {
    const email = randomEmail();
    const user = await userApi.createUser(
      userData.customUser({ email: email })
    );
    const post = await userApi.createUserPost(
      postData.validPost({ user_id: user.body.id }),
      user.body.id
    );
    const userPosts = await userApi.getUserPosts(user.body.id);
    expect.soft(Array.isArray(userPosts.body)).toBeTruthy();
    expect.soft(userPosts.body.length).toBe(1);
    expect(test.info().errors).toHaveLength(0);
  });

  test("Delete user", async ({ userApi }) => {
    const email = randomEmail();
    const user = await userApi.createUser(
      userData.customUser({ email: email })
    );

    const response = await userApi.deleteUserById(user.body.id);
    console.log(response.body);
    expect.soft(response.status).toBeTruthy();
    expect.soft(response.statusCode === 201).toBeTruthy();
    expect(test.info().errors).toHaveLength(0);
  });
});
