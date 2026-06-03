export class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Standard elements found on Daraz order placement pages
    this.checkoutHeader = page.locator('text=Proceed to Pay, text=Place Order, .checkout-title');
    this.orderSummaryBlock = page.locator('.order-summary, #orderSummary');
  }

  async isCheckoutPageLoaded() {
    // Wait for the URL path change or checkout block visibility
    await this.page.waitForURL(/checkout/, { timeout: 10000 }).catch(() => {});
    
    const urlMatches = this.page.url().includes('checkout');
    const elementsVisible = await this.checkoutHeader.first().isVisible() || await this.orderSummaryBlock.first().isVisible();
    
    return urlMatches || elementsVisible;
  }
}