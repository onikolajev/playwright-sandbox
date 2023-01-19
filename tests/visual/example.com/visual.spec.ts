import { test, expect } from "@playwright/test";

test.describe("Visual regression test", () => {
  test("Full page snashot", async ({ page }) => {
    await page.goto("https://www.example.com");
    expect(await page.screenshot()).toMatchSnapshot("homepage.png");
  })
  
  test('Single Page Snapshot', async ({page})=>{
    await page.goto("https://www.example.com");
    const pageEle = await page.$('h1')
    expect (await pageEle?.screenshot()).toMatchSnapshot('page-title.png')
  });
});
