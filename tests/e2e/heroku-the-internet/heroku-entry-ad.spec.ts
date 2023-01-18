import test from "@playwright/test";
import { HerokuEntryAdPage } from "../../../page-objects/heroku-the-internet/HerokuEntryAdPage";
import { HerokuPage } from "../../../page-objects/heroku-the-internet/HerokuPage";

test.describe("Check Entry Add", ()=>{
    let herokuPage: HerokuPage
    let herokuEntryAdPage: HerokuEntryAdPage
    
    test.beforeEach(async ({page})=>{
        herokuPage = new HerokuPage(page)
        herokuEntryAdPage = new HerokuEntryAdPage(page)

        await herokuPage.open()
    })

    test("Shoukd open Entry Add page, check header and close ad modal", async({page})=> {
        await herokuPage.selectSection("Entry Ad")
        await herokuEntryAdPage.assertSectionTitle("Entry Ad")
        await herokuEntryAdPage.assertAdModalState("Visible")
        await herokuEntryAdPage.closeAdModal()
        await herokuEntryAdPage.assertAdModalState("Hidden")
    })

    test("Should open Entry Add page, close modal and reopen it", async({page})=> {
        await herokuPage.selectSection("Entry Ad")
        await herokuEntryAdPage.assertAdModalState("Visible")
        await herokuEntryAdPage.closeAdModal()
        await herokuEntryAdPage.assertAdModalState("Hidden")
        await herokuEntryAdPage.clickRestartAd()
        await herokuEntryAdPage.assertAdModalState("Visible")
    })
})