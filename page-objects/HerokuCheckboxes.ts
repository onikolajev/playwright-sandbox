import {Page, expect, Locator} from '@playwright/test'

export class HerokuCheckboxes {
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async clickOnCheckboxName(checkboxName: string){
        let checkboxText = await this.page.locator(`text="${checkboxName}"`)
        await checkboxText.click()
    }
}