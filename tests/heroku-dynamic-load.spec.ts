import {test, Page} from "@playwright/test";
import { HerokuDynamicalLoadPage } from "../page-objects/HerokuDynamicLoadPage";
import { HerokuPage } from "../page-objects/HerokuPage";

test.describe("Dynamic Order check", ()=>{
    let herokuapp: HerokuPage
    let herokuDynamicalLoadPage : HerokuDynamicalLoadPage
    
    test.beforeEach(async({page})=>{
        herokuapp = new HerokuPage(page)
        herokuDynamicalLoadPage = new HerokuDynamicalLoadPage(page)
    
        await herokuapp.open()
        await herokuapp.selectSection('Dynamic Loading')
    })
    
    test('Should open Dynamical Order page and assert header', async({page})=>{
        await herokuDynamicalLoadPage.assertHeader('Dynamically Loaded Page Elements')
    })

    test('Should open Dynamical Order page and select 1st option', async({page})=>{
        await herokuDynamicalLoadPage.selectMenuOpion('Example 1: Element on page that is hidden')
        await herokuDynamicalLoadPage.assertLoaderState('Hidden')
        await herokuDynamicalLoadPage.clickOnStartButton()
        await herokuDynamicalLoadPage.assertLoaderState('Visible')
        await herokuDynamicalLoadPage.assertLoaderState('Hidden')
        await herokuDynamicalLoadPage.assertLoadingFinished()
    })

    test('Should open Dynamical Order page and select 2nd option', async({page})=>{
        await herokuDynamicalLoadPage.selectMenuOpion('Example 2: Element rendered after the fact')
        await herokuDynamicalLoadPage.assertLoaderState('Hidden')
        await herokuDynamicalLoadPage.clickOnStartButton()
        await herokuDynamicalLoadPage.assertLoaderState('Visible')
        await herokuDynamicalLoadPage.assertLoaderState('Hidden')
        await herokuDynamicalLoadPage.assertLoadingFinished()
    })
})