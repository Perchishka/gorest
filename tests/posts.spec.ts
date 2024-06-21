import { buildRequest } from "../lib/helpers/requestBuilder";
import { posts } from "../lib/api/posts";
import test, { expect } from "@playwright/test";
import { postData, userData } from "../lib/data/mocks/mocks";
import { users } from "../lib/api/Users";
import exp from "constants";

test.describe("Posts test", () => {});
