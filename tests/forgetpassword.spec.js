import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/Login";

test("Forgot Password Test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.clickForgotPassword();
  await loginPage.resetPassword("Admin");

  await expect(page.locator("h6")).toHaveText(
    "Reset Password link sent successfully",
  );
});
