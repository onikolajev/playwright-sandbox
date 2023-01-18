import { test, Page } from "@playwright/test";
import { HerokuPage } from "../../../page-objects/heroku-the-internet/HerokuPage";
import { HerokuDynamicControlPage } from "../../../page-objects/heroku-the-internet/HerokuDynamicControlsPage";

test.describe("Check Dynamical Controls page", () => {
  let page: Page;
  let herokuPage: HerokuPage;
  let herokuDynamicControlsPage: HerokuDynamicControlPage;

  test.beforeEach(async ({ page }) => {
    herokuPage = new HerokuPage(page);
    herokuDynamicControlsPage = new HerokuDynamicControlPage(page);

    await herokuPage.open();
    await herokuPage.selectSection("Dynamic Controls");
  });

  test("Should open Dynamic Controls page, and check title and element's default state", async ({
    page,
  }) => {
    await herokuDynamicControlsPage.assertSectionHeader("Dynamic Controls");
    await herokuDynamicControlsPage.assertCheckboxState("Visible");
    await herokuDynamicControlsPage.assertCheckboxButtonText("Remove");
    await herokuDynamicControlsPage.assertInputState("Disabled");
    await herokuDynamicControlsPage.assertInputButtonText("Enable");
  });

  test("Should hide checkbox, if button was pressed once", async ({ page }) => {
    await herokuDynamicControlsPage.clickOnCheckboxButton();
    await herokuDynamicControlsPage.assertCheckboxState("Hidden");
  });

  test("Should hide & show again checkbox, if button pressed twice", async ({
    page,
  }) => {
    await herokuDynamicControlsPage.assertCheckboxState("Visible");
    await herokuDynamicControlsPage.assertCheckboxButtonText("Remove");
    await herokuDynamicControlsPage.clickOnCheckboxButton();

    await herokuDynamicControlsPage.assertCheckboxState("Hidden");
    await herokuDynamicControlsPage.assertCheckboxButtonText("Add");
    await herokuDynamicControlsPage.clickOnCheckboxButton();

    await herokuDynamicControlsPage.assertCheckboxState("Visible");
    await herokuDynamicControlsPage.assertCheckboxButtonText("Remove");
  });

  test("Should enable input if button was pressed once", async ({ page }) => {
    await herokuDynamicControlsPage.assertInputButtonText("Enable");
    await herokuDynamicControlsPage.assertInputState("Disabled");
    await herokuDynamicControlsPage.clickOnInputButton();

    await herokuDynamicControlsPage.assertInputState("Enabled");
    await herokuDynamicControlsPage.assertInputButtonText("Disable");
  });

  test("Should enable & disable input if button was pressed twice", async ({
    page,
  }) => {
    await herokuDynamicControlsPage.assertInputState("Disabled");
    await herokuDynamicControlsPage.assertInputButtonText("Enable");
    await herokuDynamicControlsPage.clickOnInputButton();

    await herokuDynamicControlsPage.assertInputState("Enabled");
    await herokuDynamicControlsPage.assertInputButtonText("Disable");
    await herokuDynamicControlsPage.clickOnInputButton();

    await herokuDynamicControlsPage.assertInputState("Disabled");
    await herokuDynamicControlsPage.assertInputButtonText("Enable");
  });
});
