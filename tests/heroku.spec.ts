import { test, expect, Page } from "@playwright/test";
import { HerokuPage } from "../page-objects/HerokuPage";
import { HerokuInputPage } from "../page-objects/HerokuInputPage";
import { HerokuCheckboxes } from "../page-objects/HerokuCheckboxes";
import { HerokuAddElement } from "../page-objects/HerokuAddElementPage";
import { HerokuBasicAuthPage } from "../page-objects/HerokuBasicAuthPage";

test.describe("Heroku main page navigation", () => {
  let page: Page;
  let herokuPage: HerokuPage;
  let herokuInputPage: HerokuInputPage;
  let herokuCheckboxes: HerokuCheckboxes;
  let herokuAddElement: HerokuAddElement;
  let herokuBasicAuthPage : HerokuBasicAuthPage

  test.beforeEach(async ({ page }) => {
    herokuPage = new HerokuPage(page);
    herokuInputPage = new HerokuInputPage(page);
    herokuCheckboxes = new HerokuCheckboxes(page);
    herokuAddElement = new HerokuAddElement(page);
    herokuBasicAuthPage = new HerokuBasicAuthPage(page);
  });

});
