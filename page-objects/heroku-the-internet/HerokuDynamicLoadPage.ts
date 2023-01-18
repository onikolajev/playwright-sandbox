import { Page, Locator, expect } from "@playwright/test";

export class HerokuDynamicalLoadPage {
  readonly page: Page;
  readonly headerEle: Locator;
  readonly startBtn: Locator;
  readonly loadingEle: Locator;
  readonly loadingFinishEle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerEle = this.page.locator("#content > div > h3");
    this.startBtn = this.page.locator("#start > button");
    this.loadingEle = this.page.locator("#loading");
    this.loadingFinishEle= this.page.locator('#finish > h4:has-text("Hello World")')
  }

  async assertHeader(headerText: string) {
    await expect(this.headerEle).toContainText(headerText);
  }

  async selectMenuOpion(
    option:
      | "Example 1: Element on page that is hidden"
      | "Example 2: Element rendered after the fact"
  ) {
    await this.page.locator(`#content > div > a:has-text("${option}")`).click();
  }

  async clickOnStartButton() {
    await this.startBtn.click();
  }

  async assertLoaderState(state: "Visible" | "Hidden") {
    if (state === "Visible") {
      await expect(this.loadingEle).toBeVisible();
    } else {
      await expect(this.loadingEle).toBeHidden();
    }
  }

  async assertLoadingFinished(){
    await expect(this.loadingFinishEle).toBeVisible();
  }

}
