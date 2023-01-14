import test from "@playwright/test";
import { HerokuInputPage } from "../page-objects/HerokuInputPage";
import { HerokuPage } from "../page-objects/HerokuPage";


test.describe("Heroku input cases",()=>{
    let herokuPage: HerokuPage
    let herokuInputPage : HerokuInputPage

    test.beforeEach(async({page})=>{
        herokuPage = new HerokuPage(page)
        herokuInputPage = new HerokuInputPage(page)
    })
    test('Open Input section', async({page})=>{
        await herokuPage.open();
        await herokuPage.selectSection("Inputs");
        await herokuPage.assertSectionTitle("Inputs");
        await herokuInputPage.inputSomeText("420");
    })
})