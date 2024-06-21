import { faker } from "@faker-js/faker";

const postData = {
  customPost: (data) => ({
    user_id: data.user_id,
    title: data.title || "Valid Post title",
    body: data.body || "Valid post body",
  }),
};

export { postData };
