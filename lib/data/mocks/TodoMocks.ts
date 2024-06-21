import { faker } from "@faker-js/faker";

const todosData = {
  validTodo: () => ({
    id: 123456,
    user_id: 6972325,
    title: "Minima vestigium accusamus aut traho adhaero.",
    due_on: "2023-06-26T00:00:00.000+05:30",
    status: "completed",
  }),
};

export { todosData };
