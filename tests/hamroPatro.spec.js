import { test, expect } from "@playwright/test";
import { MainCalendarPage } from "../pages/MainCalendarPage.js";
import { ExplorePage } from "../pages/ExplorePage.js";

test.describe("Hamro Patro Web App Automation Suite", () => {
  let calendarPage;
  let explorePage;

  // beforeAll Hook: Initializes configuration setup
  test.beforeAll(async () => {
    console.log(
      "🚀 Initializing Hamro Patro automation execution execution context...",
    );
  });

  // beforeEach Hook: Setup page modules prior to each test scenario
  test.beforeEach(async ({ page }) => {
    console.log("🧹 Initializing POM references and launching target page...");
    calendarPage = new MainCalendarPage(page);
    explorePage = new ExplorePage(page);

    // Baseline navigation setup
    await calendarPage.navigate();
  });

  // afterEach Hook: Tracks state cleanup or failures
  test.afterEach(async ({ page }, testInfo) => {
    console.log(
      `📝 Completed scenario [${testInfo.title}] -> Result Status: ${testInfo.status}`,
    );

    // Dynamic error reporting screenshot engine
    if (testInfo.status !== "passed") {
      const screenshotPath = `screenshots/error-${testInfo.title.replace(/\s+/g, "_")}.png`;
      console.log(`❌ Test failed! Logging visual state to: ${screenshotPath}`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
    }
  });

  // afterAll Hook: Clean closure
  test.afterAll(async () => {
    console.log(
      "🏁 Execution cycle completed safely. Closing down all threads.",
    );
  });

  /**
   * SMOKE TEST
   * Validates that essential landing page information is available immediately.
   */
  test("Verify landing calendar details and main views @smoke", async ({
    page,
  }) => {
    // Assert that page title references calendar mechanics
    await expect(page).toHaveTitle(/Hamro Patro/);

    // Verify key home section module visibility
    const status = await calendarPage.upcomingEventsHeading.isVisible();
    expect(status).toBe(true);
  });

  /**
   * REGRESSION TEST 1
   * Verifies system interactive features like target search functionality.
   */
  test("Search interaction flows return appropriate view targets @regression", async ({
    page,
  }) => {
    const queryTarget = "Dashain";
    await calendarPage.searchForEvent(queryTarget);

    // Assert that system successfully passes query context to target URL
    await expect(page).toHaveURL(new RegExp(queryTarget, "i"));
  });

  /**
   * REGRESSION TEST 2
   * Validates menu link processing transitions to content sections accurately.
   */
  test("Navigate cleanly to content stream feeds from left pane @regression", async ({
    page,
  }) => {
    await calendarPage.clickExploreMenu();

    const verificationStatus = await explorePage.isFeedLoaded();
    expect(verificationStatus).toBe(true);
  });
});
