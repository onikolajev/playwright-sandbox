import {expect, test} from '@playwright/test'
import { HerokuPage } from '../../page-objects/heroku-the-internet/HerokuPage'
import {getRandomNumber, getRandomString} from '../../utils/data-helpers'


test.describe('Tips & tricks', ()=>{

    test('Checking the TestInfo Object', async ({page}, testInfo)=>{
        await page.goto('https://www.example.com')
        // console.log(testInfo) // log the full object
        console.log('=============================')
        console.log(testInfo.titlePath) // log only the part of the object
    })

    test('"Skip"ping browser', async ({page, browserName})=>{
        test.skip(browserName === "webkit", "Feature not ready in current browser")
        await page.goto('https://www.example.com')
    })

    test('"Fixme" annotation', async ({page, browserName})=>{
        test.fixme(browserName === "webkit", "Test not stable on this browser, needs some re-work")
        await page.goto('https://www.example.com')
    })

    // Parametrised tests
    const people = ['Mike', 'Judy', 'Peter', 'Elon', 'Alice']
    for (const name of people){
        test(`Running test for ${name}`, async({page})=>{
            await page.goto('http://zero.webappsecurity.com/index.html')
            await page.type('#searchTerm', name)
            await page.waitForTimeout(2000)
        })
    }

    test('Mouse Movement Simulations', async ({page, browserName})=>{
        await page.goto('https://www.example.com')
        await page.mouse.move(0, 0)
        await page.mouse.down()
        await page.mouse.move(0, 100)
        await page.mouse.up()
    })

    test('Multiple Browser tabs inside 1 Browser', async ({browser})=>{
        const context = await browser.newContext()
        const page1 = await context.newPage()
        const page2 = await context.newPage()
        const page3 = await context.newPage()

        await page1.goto('http://zero.webappsecurity.com/index.html')
        await page2.goto('http://zero.webappsecurity.com/index.html')
        await page3.goto('http://zero.webappsecurity.com/index.html')

        await page1.waitForTimeout(2000 )
    })



    // Openning page as other device
    // terminal: npx playwright open --device="iPhone 11" wikipedia.org



    // Create PDF file from a page
    // npx playwright pdf wikipedia.org my-file.pdf
    
    
    // will spam the consoloe log
    test.skip('List texts of all similar elements', async ({page})=>{
        let herokuPage = new HerokuPage(page)
        await herokuPage.open()

        const elements = await page.locator('#content > ul > li > a')
        await expect(elements).toHaveCount(44)
        console.log(await elements.count())
        for (let i =0;i < 44; i++){
            let text = await elements.nth(i).textContent()
            console.log(`"${text}",`)
        }
    })



    // Custom screenshots
    // npx playwright screenshot --device="iPhone 11" --color-scheme=dark --wait-for-timeout=3000 twitter.com twitter-iphone-image.png
    


    // Custom timezone
    // npx playwright open --timezone="Europe/Rome" --lang="it-IT" google.com

    
    test.skip('Check function helpers for generating data',async ({page}) => {
        console.log(await getRandomNumber())
        console.log(await getRandomString())
    })
})