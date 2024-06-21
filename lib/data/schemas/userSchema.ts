import addFormats from "ajv-formats";
import Ajv from "ajv";
import { expect } from "@playwright/test";

export function validateSchema<T>(schemaJson, responseData) {
  const ajv = new Ajv();
  addFormats(ajv);
  const valid = ajv.validate(schemaJson, responseData);
  if (!valid) {
    console.log(ajv.errorsText());
  }
  expect(valid).toBe(true);
}
