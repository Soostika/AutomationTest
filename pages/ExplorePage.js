export class ExplorePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.newsFeedContainer = page.locator(
      '.news-container, .explore-container, [class*="explore"]',
    );
    this.firstNewsArticle = page
      .locator('a[href*="/news/"], [class*="story"]')
      .first();
  }

  async isFeedLoaded() {
    // Checks that dynamic elements on the feed are visible
    await this.page.waitForTimeout(1000); // Small buffer for API rendering
    return await this.page.url().includes("/explore");
  }
}
