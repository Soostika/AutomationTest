export class ChangePassword {
  constructor(page) {
    this.page = page;

    // Dropdown & navigation
    this.dropdown = page.locator(".oxd-userdropdown-tab");
    this.changePasswordLink = page.getByRole("menuitem", {
      name: "Change Password",
    });

    // Change Password Page
    this.currentPasswordInput = page.locator('input[type="password"]').nth(0);
    this.newPasswordInput = page.locator('input[type="password"]').nth(1);
    this.confirmPasswordInput = page.locator('input[type="password"]').nth(2);

    // Button
    this.saveButton = page.getByRole("button", { name: "Save" });
  }

  // Navigation to Change Password
  async changePasswordNavigation() {
    await this.dropdown.click();
    await this.changePasswordLink.click();
  }

  // Update Password
  async updatePassword(currentPass, newPass) {
    await this.currentPasswordInput.fill(currentPass);
    await this.newPasswordInput.fill(newPass);
    await this.confirmPasswordInput.fill(newPass);
    await this.saveButton.click();
  }

  // Go to dashboard
  async goto() {
    await this.page.goto(
      "https://automationexercise.com"
    );
  }
}