import test from "@playwright/test";
import { HerokuCheckboxes } from "../../../page-objects/heroku-the-internet/HerokuCheckboxes";
import { HerokuPage } from "../../../page-objects/heroku-the-internet/HerokuPage";

test.describe("Heroku checkboxes", () => {
  let herokuPage: HerokuPage;
  let herokuCheckboxes: HerokuCheckboxes;

  test.beforeEach(async ({ page }) => {
    herokuPage = new HerokuPage(page);
    herokuCheckboxes = new HerokuCheckboxes(page);
  });

  test("Open checkboxes page", async ({ page }) => {
    await herokuPage.open();
    await herokuPage.selectSection("Checkboxes");
    await herokuPage.assertSectionTitle("Checkboxes");
    await herokuCheckboxes.clickOnCheckboxName("checkbox 1");
  });
});
