import {expect, Page, Locator } from '@playwright/test'

export class HerokuInputPage{
    readonly page: Page
    readonly inputElement: Locator

    constructor (page: Page){
        this.page = page
        this.inputElement = page.locator('#content input[type=number]')
    }

    async inputSomeText(someText: string){
        await this.inputElement.type(someText)
    }
}