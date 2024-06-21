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

export { userData };
