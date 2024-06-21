import { faker } from "@faker-js/faker";

const commentsData = {
  vaildComment: () => ({
    name: "Book Title",
    email: faker.internet.email(),
    body: "Book Title",
  }),

  customComment: (data) => ({
    name: data.name || "Custom name",
    email: data.email || faker.internet.email(),
    body: data.body || "Valid comment body",
  }),

  updatedComment: (data) => ({
    name: data.name || "Updated name",
    email: data.email || faker.internet.email(),
    body: data.body || "Updated comment body",
  }),
};

export { commentsData };
