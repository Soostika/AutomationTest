export class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.searchBox = page.getByPlaceholder("Search in Daraz");
    this.searchButton = page.locator("button[type='submit']");
  }

  async searchProduct(productName) {
    await this.searchBox.waitFor({ state: "visible" });
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }
}
