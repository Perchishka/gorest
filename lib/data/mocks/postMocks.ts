import { Post } from "../../helpers/types";

const postData = {
  customPost: (data: Partial<Post>): Post => ({
    user_id: data.user_id || 0,
    title: data.title || "Valid Post title",
    body: data.body || "Valid post body"
  })
};

export { postData };
