import { test, expect } from "@playwright/test";
import { ChangePassword } from "../pages/ChangePassword";
import { LoginPage } from "../pages/Login";
import { generateNewPassword, staticCredentials } from  "../Utils/TestData";

test("User should be able to update password successfully", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const changePassword = new ChangePassword(page);

  const newPassword = generateNewPassword();

  // Login
  await loginPage.goTo();
  await loginPage.login(
    staticCredentials.defaultAdmin,
    staticCredentials.currentPassword,
  );

  // Navigate to change password
  await changePassword.goto();
  await changePassword.changePasswordNavigation();

  // Update password
  await changePassword.updatePassword(
    staticCredentials.currentPassword,
    newPassword,
  );

  // Verify success message
  await expect(page.getByText("Successfully Saved")).toBeVisible();
});
