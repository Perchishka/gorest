import { faker } from "@faker-js/faker";

const userData = {
  validUser: () => ({
    name: "Book Titleeer",
    gender: "female",
    email: faker.internet.email(),
    status: "active",
  }),

  customUser: (data) => ({
    name: data.name || "Custom name",
    gender: data.gender || "female",
    email: data.email || faker.internet.email(),
    status: data.status || "active",
  }),

  updateFieldsUser: (data) => ({
    name: data.name || "Updated user",
    gender: data.gender || "male",
    email: data.email || faker.internet.email(),
    status: data.status || "inactive",
  }),

  updateEmail: () => ({
    email: faker.internet.email(),
  }),
};

const postData = {
  customPost: (data) => ({
    user_id: data.user_id,
    title: data.title || "Valid Post title",
    body: data.body || "Valid post body",
  }),
};

const todosData = {
  validTodo: () => ({
    id: 123456,
    user_id: 6972325,
    title: "Minima vestigium accusamus aut traho adhaero.",
    due_on: "2023-06-26T00:00:00.000+05:30",
    status: "completed",
  }),
};

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

export { userData, postData, todosData, commentsData };
