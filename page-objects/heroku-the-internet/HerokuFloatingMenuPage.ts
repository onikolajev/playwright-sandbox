import { expect, Page, Locator } from "@playwright/test";

export class HerokuFloatingMenuPage{
    readonly page:Page
    readonly headerEle: Locator
    readonly footerEle: Locator

    constructor(page: Page){
        this.page = page
        this.headerEle = this.page.locator('#content > div > h3')
        this.footerEle = this.page.locator('#page-footer')
    }

    async assertSectionHeader(header: string){
        await expect(this.headerEle).toHaveText(header)
    }

    async scrollToBottom(){
        await this.page.keyboard.down('End')
    }

    async assertFooter(){
        await expect(this.footerEle).toBeVisible()
    }
}