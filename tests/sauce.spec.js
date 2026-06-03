import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPageSwaga.js";
import { HomePage } from "../pages/ProductPageSwaga.js";
import { CartPage } from "../pages/CartPageSwaga.js";
import { CheckoutPage } from "../pages/CheckoutPageSwaga.js";

test.describe("🔥 SauceDemo Test Suite (Smoke + Regression)", () => {
  let loginPage;
  let homePage;
  let cartPage;
  let checkoutPage;

  // =========================
  // BEFORE EACH TEST (HOOK)
  // =========================
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");
  });

  // =========================
  // AFTER EACH TEST (HOOK)
  // =========================
  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== "passed") {
      await page.screenshot({
        path: `screenshots/${testInfo.title.replace(/\s+/g, "-")}.png`,
        fullPage: true,
      });
    }
  });

  // =========================
  // 🔥 SMOKE TEST
  // =========================
  test("Smoke - Add product to cart", async () => {
    await homePage.addProductToCart();
    await homePage.goToCart();

    await expect(homePage.cartIcon).toBeVisible();
  });

  // =========================
  // 🧪 REGRESSION TEST
  // =========================
  test("Regression - Complete purchase flow", async () => {
    await homePage.addProductToCart();
    await homePage.goToCart();

    await cartPage.checkout();

    await checkoutPage.fillForm("John", "Doe", "12345");
    await checkoutPage.finish();

    await expect(await checkoutPage.isSuccess()).toBeTruthy();
  });
});