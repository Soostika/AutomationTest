import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/Login";

test("Login Test using POM", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.login("Admin", "admin123");

  await expect(page).toHaveURL(/dashboard/);
});
