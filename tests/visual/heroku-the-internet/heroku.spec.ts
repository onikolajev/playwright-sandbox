import { test,} from "@playwright/test";
import { HerokuPage } from "../../../page-objects/heroku-the-internet/HerokuPage";

test.describe("Heroku home page", () => {
  let herokuPage: HerokuPage;

  test.beforeEach(async ({ page }) => {
    herokuPage = new HerokuPage(page);

    await herokuPage.open()
  });

  test('Home page visual testing', async({page})=>{
    await herokuPage.snapshotAssert();
  })
});
