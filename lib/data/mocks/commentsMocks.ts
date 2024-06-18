import { faker } from "@faker-js/faker";
import { Comment } from "../../helpers/types";

const commentsData = {
  vaildComment: (): Comment => ({
    name: "Book Title",
    email: faker.internet.email(),
    body: "Book Title"
  }),

  customComment: (data: Partial<Comment>): Comment => ({
    name: data.name || "Custom name",
    email: data.email || faker.internet.email(),
    body: data.body || "Valid comment body"
  }),

  updatedComment: (data: Partial<Comment>): Comment => ({
    name: data.name || "Updated name",
    email: data.email || faker.internet.email(),
    body: data.body || "Updated comment body"
  })
};

export { commentsData };
