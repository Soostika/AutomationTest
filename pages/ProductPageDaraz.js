export class ProductPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Locates product cards on the search results page
    this.productGridItems = page.locator(
      '[data-qa-locator="product-item"] a, .gridItem___3gLOj a',
    );
    // "Buy Now" orange action button on the individual product page
    this.buyNowButton = page.locator(
      'button:has-text("Buy Now"), .pdp-button_theme_orange',
    );
  }

  async selectFirstProduct() {
    // Wait for search results grid to populate and pick the first available link
    await this.productGridItems.first().waitFor({ state: "visible" });
    await this.productGridItems.first().click();
  }

  async clickBuyNow() {
    // Click buy now to trigger the order/checkout screen redirect
    await this.buyNowButton.waitFor({ state: "visible" });
    await this.buyNowButton.click();
  }
}
