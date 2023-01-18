import { Locator, Page, expect } from "@playwright/test";

export class HerokuDynamicControlPage {
  readonly page: Page;
  readonly checkboxButton: Locator;
  readonly checkboxEle: Locator;
  readonly inputButton: Locator;
  readonly inputEle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkboxButton = this.page.locator("#checkbox-example > button");
    this.checkboxEle = this.page.locator("#checkbox");
    this.inputButton = this.page.locator("#input-example > button");
    this.inputEle = this.page.locator("#input-example > input[type=text]");
  }

  async assertSectionHeader(header: string) {
    await this.page.locator(
      `#content > div.example > h4:has-text("${header}")`
    );
  }

  async assertCheckboxButtonText(buttonText: "Remove" | "Add") {
    await expect(this.checkboxButton).toContainText(buttonText);
  }

  async clickOnCheckboxButton() {
    await this.checkboxButton.click();
  }

  async assertCheckboxState(state: "Visible" | "Hidden") {
    if (state === "Visible") {
      await expect(this.checkboxEle).toBeVisible();
    } else {
      await expect(this.checkboxEle).toBeHidden();
    }
  }

  async clickOnInputButton() {
    await this.inputButton.click();
  }

  async assertInputState(state: "Disabled" | "Enabled") {
    if (state === "Disabled") {
      await expect(this.inputEle).toBeDisabled();
    } else {
      await expect(this.inputEle).toBeEnabled();
    }
  }

  async assertInputButtonText(btnText: "Enable" | "Disable") {
    await expect(this.inputButton).toContainText(btnText);
  }
}
