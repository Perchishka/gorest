// import { PostApi } from "../api/postApi";
// import { test as base } from "@playwright/test";
// import { userApi } from "../api/userapi";

// type ApiFixture = {
//   apiUser: any;
//   postApi: PostApi;
// };

// const apiFixture = base.extend<ApiFixture>({
//   apiUser: async ({ request }, use) => {
//     const apiUser = new userApi(request);
//     await use(apiUser);

//     postApi: async ({ request }, use) => {
//       const postApi = new PostApi(request);
//       await use(postApi);
//     };
//   },
// });

// export { apiFixture };
