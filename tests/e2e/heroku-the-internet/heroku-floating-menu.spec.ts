import test from "@playwright/test";
import { HerokuFloatingMenuPage } from "../../../page-objects/heroku-the-internet/HerokuFloatingMenuPage";
import { HerokuPage } from "../../../page-objects/heroku-the-internet/HerokuPage";

test.describe('Floating Menu check', ()=>{
    let herokuPage:HerokuPage
    let herokuFloatingMenuPage: HerokuFloatingMenuPage
    
    test.beforeEach(async({page})=>{
        herokuPage = new HerokuPage(page)
        herokuFloatingMenuPage = new HerokuFloatingMenuPage(page)
    
        await herokuPage.open()
        await herokuPage.selectSection('Floating Menu')
    })

    test('Open section and check title', async({page})=>{
        await herokuFloatingMenuPage.assertSectionHeader('Floating Menu')
        await herokuFloatingMenuPage.assertFooter()

        await herokuFloatingMenuPage.scrollToBottom()
        await herokuFloatingMenuPage.assertFooter()
        await page.waitForTimeout(5000)
        await herokuFloatingMenuPage.assertSectionHeader('Floating Menu')

    })
})