import { test, expect } from "@playwright/test";
import { reqresGetUsers, reqresGetUser } from "../../../helpers";

test.describe.parallel("API testing > https://reqres.in/", () => {
  let url = "https://reqres.in/api";

  test("GET > List users, page 2", async ({ request }) => {
    let responseBody = await reqresGetUsers(request, 2);

  });

  test("GET > List users, page 10000", async ({ request }) => {
    let response = await reqresGetUsers(request, 10000, false);
    let responseBody = JSON.parse(await response.text())
    expect(responseBody.data).toStrictEqual([]);
  });

  test('GET > Single user, id 2', async({request})=>{
    let responseBody = await reqresGetUser(request, 2)
  })

//   test('GET > Single user not found', async ({request})=>{
//     let response = await reqresGetUsers(request, 23, false)
//     console.log(response)

//     let responseBody = JSON.parse(await response.text())
//     console.log(responseBody)
//     expect(response.status()).toBe(404)
//   })
});
