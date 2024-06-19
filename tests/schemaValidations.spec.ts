import { expect, test } from "@playwright/test";
import { userData } from "../lib/data/mocks";
import { validate } from "../lib/data/schemas/userSchema";

test.describe("Posts test", () => {

  test("get posts", async ({ request }) => {
    
    if (validate(userData.userWithEmptyFields())) {
      console.log("correct");
    } else {
      console.log(validate.errors)
    }
  });

});

