import test from "@playwright/test";
import { HerokuDropdownPage } from "../../../page-objects/heroku-the-internet/HerokuDropdownPage";
import { HerokuPage } from "../../../page-objects//heroku-the-internet/HerokuPage";

test.describe("Dropbox check", ()=>{
    let herokuPage: HerokuPage
    let herokuDropdownPage: HerokuDropdownPage
    
    test.beforeEach(async({page})=>{
        herokuPage = new HerokuPage(page)
        herokuDropdownPage = new HerokuDropdownPage(page)
        
        await herokuPage.open();
        await herokuPage.selectSection("Dropdown");
    })

    test("Open dropdown page",async ({page}) => {
        await herokuPage.assertSectionTitle("Dropdown List");
    })

    test("Select 2nd option", async ({page})=> {
        await herokuDropdownPage.selectOption("Option 2")
        await herokuDropdownPage.assertSelectedOption("Option 2")
    })

})