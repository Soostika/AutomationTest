export class FeaturesPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Navigation side-panel / top-menu locators
    this.radioLink = page.locator('a[href="/radio"], text="Radio"');
    this.newsLink = page.locator('a[href="/news"], text="News"');
    this.kundaliLink = page.locator('a[href*="kundali"], text="Kundali"');
    this.remitLink = page.locator('a[href*="remit"], text="Remit"');

    // Feature-specific selectors
    this.playRadioButton = page
      .locator('.play-btn, [aria-label="Play Radio"]')
      .first();
    this.audioPlayerStatus = page.locator('.audio-player, [class*="playing"]');
    this.newsCategories = page.locator(
      '.news-category-item, [class*="category"]',
    );
    this.generateKundaliButton = page.locator(
      'button:has-text("Generate"), button:has-text("हेरौं")',
    );
    this.remitRateCalculator = page.locator(
      '#remit-calculator, [class*="calculator"]',
    );
  }

  async navigateToRadioAndPlay() {
    await this.radioLink.first().click();
    await this.playRadioButton.waitFor({ state: "visible" });
    await this.playRadioButton.click();
  }

  async navigateToNewsAndFilter() {
    await this.newsLink.first().click();
    await this.page.waitForLoadState("load");
    return await this.newsCategories.count();
  }

  async checkKundaliUtility() {
    await this.kundaliLink.first().click();
    return await this.generateKundaliButton.isVisible();
  }

  async checkRemittanceCalculator() {
    await this.remitLink.first().click();
    await this.page.waitForLoadState("networkidle");
    return await this.remitRateCalculator.isVisible();
  }
}
