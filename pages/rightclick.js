import { expect } from "@playwright/test";

export class RightClickPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.pointMeButton = page.getByRole("button", { name: "Point Me" });
    this.laptopOption = page.getByRole("link", { name: "Laptop" });

    this.rightClickButton = page.locator(
      '//button[contains(text(),"Copy Text")]',
    );
  }

  async goto() {
    await this.page.goto("https://testautomationpractice.blogspot.com/");
  }

  async hoverPointMe() {
    await this.pointMeButton.hover();
  }

  async clickLaptop() {
    await this.laptopOption.click();
  }

  async rightClickAction() {
    await this.rightClickButton.click({ button: "right" });
  }
}
