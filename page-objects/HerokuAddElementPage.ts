import {expect, Page, Locator} from '@playwright/test'

export class HerokuAddElement {
    readonly page: Page
    readonly addElementBtn: Locator
    readonly deleteBtn: Locator

    constructor(page: Page){
        this.page = page
        this.addElementBtn = this.page.locator('button:has-text("Add Element")')
    }

    async clickOnAddElement(){
        await this.addElementBtn.click()
    }

    async assertAddedElementCount(count: number){
        let elemCount = await this.page.locator('#elements > button').count()
        expect(elemCount).toEqual(count)
    }

    async clickOnDeleteButton(btnIndex: number = 0){
        await this.page.locator(`button:has-text("Delete")`).nth(btnIndex).click()
    }

}