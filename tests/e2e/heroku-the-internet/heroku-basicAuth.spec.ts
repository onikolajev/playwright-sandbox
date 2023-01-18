import { Page, test, expect } from "@playwright/test";
import { HerokuBasicAuthPage } from "../../../page-objects/heroku-the-internet/HerokuBasicAuthPage";
import { HerokuPage } from "../../../page-objects/heroku-the-internet/HerokuPage";

test.describe("Basic Auth check", () => {
  let herokuPage: HerokuPage;
  let herokuBasicAuthPage: HerokuBasicAuthPage;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext({
      httpCredentials: {
        username: "admin",
        password: "admin",
      },
    });

    const page = await context.newPage();
    herokuPage = new HerokuPage(page);
    herokuBasicAuthPage = new HerokuBasicAuthPage(page);

    await herokuPage.open();
  });

  test("Check basic Auth section", async ({ page }) => {
    await herokuPage.selectSection("Basic Auth");
    await herokuPage.assertSectionTitle("Basic Auth");
    await herokuBasicAuthPage.assertPageBody(
      "Congratulations! You must have the proper credentials."
    );
  });
});
