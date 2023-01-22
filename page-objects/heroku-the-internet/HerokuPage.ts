import {expect, Page, Locator} from '@playwright/test'

export class HerokuPage{
    readonly page: Page 

    constructor (page: Page){
        this.page = page
    }

    async open(){
        await this.page.goto('https://the-internet.herokuapp.com/')
    }

    async selectSection(sectionTitle: string){
        let elem = await this.page.locator(`#content li a:text("${sectionTitle}")`)
        await elem.click()
    }

    async assertSectionTitle(sectionTitle: string){
        await this.page.waitForLoadState('networkidle');
        let headerElem = await this.page.locator('#content h3')
        await expect(headerElem).toHaveText(sectionTitle)
    }

    async snapshotAssert() {
        let homePageSnapshot = await this.page.screenshot();
        await expect(homePageSnapshot).toMatchSnapshot('heroku-home-page.png')
    }
}