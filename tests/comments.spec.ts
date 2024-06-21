import { test, expect } from "@playwright/test";
import { comments } from "../lib/api/comments";
import { commentsData, postData, userData } from "../lib/data/mocks/mocks";
import { users } from "../lib/api/usersFunction";
import { posts } from "../lib/api/postsFunction";

test.describe("Comments test", () => {
  
  test("Creates a post comment ", async ({ request }) => {
    const user = await users(request).createUser(userData.customUser({}));
    const userBody = await user.json();
    const response = await posts(request).createPost(
      postData.validPost(),
      userBody.id
    );
    const postBody = await response.json();
    const createComment = await comments(request).createPostComment(commentsData.vaildComment(), postBody.id); 
    const commentBody = await createComment.json();
    expect(response.ok()).toBeTruthy()
    expect(commentBody.post_id === postBody.id).toBeTruthy();
    expect(commentBody.email === userBody.email);
    expect(commentBody.body === commentsData.vaildComment().body);;
  });

  test("Retrieves posts comments when post does not have any comments", async ({
    request,
  }) => {
    const postBody = await createUserWithPost(request);
    const commentsResponse = await comments(request).getPostComments(postBody.id)
   console.log(await commentsResponse.json())
  });

  test("Retrieves user posts when user has some posts", async ({ request }) => {
    const user = await users(request).createUser(userData.customUser({}));
    const userBody = await user.json();
    console.log(userBody.id);
    await posts(request).createPost(postData.validPost(), userBody.id);
    const userPosts = await users(request).getUsersPost(userBody.id);
    const userPostBody = await userPosts.json();
    expect(userPostBody.length).toBe(1);
  });
});

async function createUserWithPost(request) {
  const user = await users(request).createUser(userData.customUser({}));
  const userBody = await user.json();
  const response = await posts(request).createPost(
    postData.validPost(),
    userBody.id
  );
  const postBody = await response.json();
  return postBody;
}

