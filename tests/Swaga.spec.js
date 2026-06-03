import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPageSwaga.js";
import { HomePage } from "../pages/ProductPageSwaga.js";
import { CartPage } from "../pages/CartPageSwaga.js";
import { CheckoutPage } from "../pages/CheckoutPageSwaga.js";

test("SauceDemo full purchase flow", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.navigate();
  await loginPage.login("standard_user", "secret_sauce");

  // Add product to cart
  await homePage.addFirstProductToCart();
  await homePage.goToCart();

  // Checkout
  await cartPage.checkout();

  // Fill details
  await checkoutPage.fillDetails("John", "Doe", "12345");

  // Finish order
  await checkoutPage.finishOrder();

  // Assertion
  await expect(await checkoutPage.isOrderComplete()).toBeTruthy();
});
