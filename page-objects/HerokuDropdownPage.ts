import { Locator, Page, expect } from "@playwright/test";

export class HerokuDropdownPage {
  readonly page: Page;
  readonly dropdownEle: Locator;
  readonly selectedDropdownEle: Locator;

  constructor(page) {
    this.page = page;
    this.dropdownEle = page.locator("#dropdown");
    this.selectedDropdownEle = page.locator('#dropdown option[selected="selected"]')
  }

  async selectOption(option: string) {
    await this.dropdownEle.selectOption(option);
  }

  async assertSelectedOption(expectedOption: string) {
    await expect(this.selectedDropdownEle).toHaveText(expectedOption);
  }
}
