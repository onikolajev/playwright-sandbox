import test from "@playwright/test";
import { HerokuAddElement } from "../../../page-objects/heroku-the-internet/HerokuAddElementPage";
import { HerokuPage } from "../../../page-objects/heroku-the-internet/HerokuPage";

test.describe("Check Add/Delete buttons", () => {
  let herokuPage: HerokuPage;
  let herokuAddElement: HerokuAddElement;

  test.beforeEach(async ({ page }) => {
    herokuPage = new HerokuPage(page);
    herokuAddElement = new HerokuAddElement(page);
  });

  test("Open Add/Delete section", async ({ page }) => {
    await herokuPage.open();
    await herokuPage.selectSection("Add/Remove Elements");
    await herokuPage.assertSectionTitle("Add/Remove Elements");
  });

  test('Click on "Add" button 1 time', async({page})=>{
    await herokuPage.open();
    await herokuPage.selectSection("Add/Remove Elements");
    
    await herokuAddElement.assertAddedElementCount(0);
    await herokuAddElement.clickOnAddElement();
    await herokuAddElement.assertAddedElementCount(1);
  })

  test('Click on "Add" button 1 time and "Delete"', async({page})=>{
    await herokuPage.open();
    await herokuPage.selectSection("Add/Remove Elements");
    
    await herokuAddElement.assertAddedElementCount(0);
    await herokuAddElement.clickOnAddElement();
    await herokuAddElement.assertAddedElementCount(1);
    await herokuAddElement.clickOnDeleteButton()
    await herokuAddElement.assertAddedElementCount(0)
  })
});
