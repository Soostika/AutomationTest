import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPageDaraz.js";
import { HomePage } from "../pages/HomePage.js";
import { ProductPage } from "../pages/ProductPageDaraz.js";
import { CheckoutPage } from "../pages/CheckoutPageDaraz.js";

test.describe("Daraz E-Commerce Smoke Test", () => {
  let loginPage;
  let homePage;
  let productPage;
  let checkoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login("your_email@example.com", "YourPassword123");
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== "passed") {
      await page.screenshot({
        path: `screenshots/failed-${testInfo.title}.png`,
        fullPage: true,
      });
    }
  });

  test("Search product and navigate to Checkout", async ({ page }) => {
    await page.goto("https://www.daraz.com.np/");

    await homePage.searchProduct("Earbuds");
    await productPage.selectFirstProduct();
    await productPage.clickBuyNow();

    const isAtCheckout = await checkoutPage.isCheckoutPageLoaded();
    expect(isAtCheckout).toBe(true);
  });
});
