import { APIRequestContext, APIResponse } from "@playwright/test";
import { Method, Resource } from "./types";

export async function buildRequest<T>(
  request: APIRequestContext,
  url: string,
  method: Method,
  data?: T
): Promise<{
  body: T | T[];
  status: boolean;
  statusCode: number;
}> {
  if (method in ["get", "delete"]) {
    data = undefined;
  }

  const response = await request[method](url, { data });
  const body = await response.json();
  const status = response.ok();
  const statusCode = response.status();
  console.log({ method, url, data });
  return { body, status, statusCode };
}
