import { test, expect, Page } from "@playwright/test";
import { HerokuPage } from "../../../page-objects/heroku-the-internet/HerokuPage";
import { HerokuInputPage } from "../../../page-objects/heroku-the-internet/HerokuInputPage";
import { HerokuCheckboxes } from "../../../page-objects/heroku-the-internet/HerokuCheckboxes";
import { HerokuAddElement } from "../../../page-objects/heroku-the-internet/HerokuAddElementPage";
import { HerokuBasicAuthPage } from "../../..//page-objects/heroku-the-internet/HerokuBasicAuthPage";

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
