import { APIResponse, expect } from "@playwright/test";

export async function validateErrorMessage(
  response: APIResponse,
  field: string,
  errorMessage: string
) {
  await expect(response).not.toBeOK();
  const body = await response.json();
  expect(body).toMatchObject([
    {
      field: field,
      message: errorMessage,
    },
  ]);
}
