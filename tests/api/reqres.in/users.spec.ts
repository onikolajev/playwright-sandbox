import { test, expect } from "@playwright/test";
import {
  getUsers,
  getUser,
  consoleLogResponse,
  createUser,
} from "../../../utils/reqres-api-helpers";

test.describe.parallel("API testing > https://reqres.in/", () => {
  let url = "https://reqres.in/api";

  test("GET > List users, page 2", async ({ request }) => {
    await getUsers(request, 2);
  });

  test("GET > List users, page 10000", async ({ request }) => {
    let response = await getUsers(request, 10000, false);
    let responseBody = JSON.parse(await response.text());
    expect(responseBody.data).toStrictEqual([]);
  });

  test("GET > Single user, id 2", async ({ request }) => {
    await getUser(request, 2);
  });

  test("GET > Single user not found", async ({ request }) => {
    let response = await getUser(request, 23, false);
    JSON.parse(await response.text());
    expect(response.status()).toBe(404);
  });

  test("POST > Create user", async ({ request }) => {
    let requestBody = { data: { name: "Oleg", job: "QA" } };
    await createUser(request, requestBody);
  });

  test("POST > Try to create user with empty name and job", async ({
    request,
  }) => {
    let requestBody = { data: { name: "", job: "" } };
    let response = await createUser(request, requestBody, false);
    let responseBody = JSON.parse(await response.text());

    expect(await response.status()).toBe(201);
    expect(responseBody.name).toBeFalsy();
    expect(responseBody.job).toBeFalsy();
    expect(responseBody.id).toBeTruthy();
    expect(responseBody.createdAt).toBeTruthy();
  });

  test("POST > Try to create user with empty body", async ({ request }) => {
    let requestBody = { data: {} };
    let response = await createUser(request, requestBody, false);
    let responseBody = JSON.parse(await response.text());

    expect(await response.status()).toBe(201);
    expect(responseBody.name).toBeFalsy();
    expect(responseBody.job).toBeFalsy();
    expect(responseBody.id).toBeTruthy();
    expect(responseBody.createdAt).toBeTruthy();
  });
});
