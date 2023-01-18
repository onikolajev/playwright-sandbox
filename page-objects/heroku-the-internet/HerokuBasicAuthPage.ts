import { Page, Locator, expect } from "@playwright/test";

export class HerokuBasicAuthPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertPageBody(bodyText: string) {
    let bodyElem = await this.page.locator("#content p");
    await expect(bodyElem).toHaveText(bodyText);
  }
}
