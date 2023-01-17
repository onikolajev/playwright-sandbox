import {Locator, Page, expect} from "@playwright/test"

export class HerokuEntryAdPage{
    readonly restardAdEle: Locator
    readonly page: Page
    readonly modalEle: Locator
    readonly headerEle: Locator
    readonly modalCloseBtn: Locator

    constructor (page: Page){
        this.page = page
        this.restardAdEle = this.page.locator('#restart-ad')
        this.modalEle = this.page.locator('#modal > div.modal')
        this.headerEle = this.page.locator('#content .example h3')
        this.modalCloseBtn = this.page.locator('div.modal-footer > p:has-text("Close")')
    }

    async assertSectionTitle(sectionTitle: string){
        await expect(this.headerEle).toHaveText(sectionTitle)
    }

    async clickRestartAd(){
        await this.restardAdEle.click()
    }

    async assertAdModalState(state: "Hidden" | "Visible"){
        if (state === "Hidden") {
            await expect(this.modalEle).toBeHidden()
        } else {
            await expect(this.modalEle).toBeVisible()
        }
    }

    async closeAdModal(){
        await this.modalCloseBtn.click()
    }
}