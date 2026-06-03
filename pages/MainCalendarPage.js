import { expect } from "@playwright/test";

export class MainCalendarPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = "https://app.hamropatro.com/";

    // Locators
    this.searchButton = page.locator(
      'button:has-text("Search Dates"), [placeholder*="Search Dates"]',
    );

    this.searchInput = page.locator("input:visible");

    this.upcomingEventsHeading = page.locator("text=Upcoming Events");

    // FIXED: use ONE correct locator only
    this.exploreMenuLink = page.locator('a[href="/explore"]');
  }

  async navigate() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState("networkidle");

    await expect(this.upcomingEventsHeading).toBeVisible();
  }

  async searchForEvent(eventName) {
    await this.page.keyboard.press("Control+K");

    await expect(this.searchInput).toBeVisible();
    await this.searchInput.fill(eventName);

    await this.page.keyboard.press("Enter");

    await this.page.waitForLoadState("networkidle");
  }

  async clickExploreMenu() {
    await this.exploreMenuLink.click();
    await this.page.waitForLoadState("load");
  }
}
