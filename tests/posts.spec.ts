import { expect } from "@playwright/test";
import { fixtures as test } from "../lib/api/apiFixtures";
import { createUserWithPost } from "../lib/helpers/apiHelper";
import { commentsData } from "../lib/data/mocks/commentsMocks";

test.describe("Posts test", () => {
  test("Create post comments ", async ({ userApi, postApi }) => {
    const { email, post } = await createUserWithPost(userApi);
    const comment = commentsData.customComment({ email: email });
    const postComment = await postApi.createPostComment(comment, post.body.id);
    expect.soft(postComment.body.name).toEqual(comment.name);
    expect.soft(postComment.body.email).toEqual(email);
    expect.soft(postComment.body.body).toEqual(comment.body);
    expect(test.info().errors).toHaveLength(0);
  });

  test("Get post comments ", async ({ userApi, postApi }) => {
    const { email, post } = await createUserWithPost(userApi);
    await postApi.createPostComment(
      commentsData.customComment({ email: email }),
      post.body.id
    );
    const comments = await postApi.getPostComments(post.body.id);
    expect.soft(Array.isArray(comments.body)).toBeTruthy();
    expect.soft(comments.body.length).toBe(1);
    expect(test.info().errors).toHaveLength(0);
  });

  test("Delete post", async ({ userApi, postApi }) => {
    const { id, post } = await createUserWithPost(userApi);
    const response = await postApi.deletePostById(post.body.id);
    expect(response.statusCode === 204).toBeTruthy();
    const userPosts = await userApi.getUserPosts(id);
    expect.soft(Array.isArray(userPosts.body)).toBeTruthy();
    expect.soft(userPosts.body.length).toBe(0);
    expect(test.info().errors).toHaveLength(0);
  });
});
