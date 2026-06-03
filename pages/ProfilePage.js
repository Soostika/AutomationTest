export class ProfilePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Auth locators
    this.loginButton = page.locator("text=Log In, text=Sign In");
    this.emailInput = page.locator(
      'input[type="email"], [placeholder*="Email"]',
    );
    this.passwordInput = page.locator('input[type="password"]');
    this.submitLogin = page.locator(
      'button[type="submit"], button:has-text("Login")',
    );

    // Profile Form locators
    this.profileMenu = page.locator('a[href*="/profile"], .user-profile-icon');
    this.editProfileButton = page.locator(
      'text=Edit Profile, button:has-text("Edit")',
    );
    this.fullNameInput = page.locator(
      'input[name="fullName"], [placeholder*="Full Name"]',
    );
    this.phoneNumberInput = page.locator(
      'input[name="phone"], [placeholder*="Phone"]',
    );
    this.genderDropdown = page.locator('select[name="gender"], .gender-select');
    this.saveButton = page.locator(
      'button:has-text("Save"), button:has-text("Update")',
    );
  }

  async login(email, password) {
    if (await this.loginButton.isVisible()) {
      await this.loginButton.click();
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.submitLogin.click();
      await this.page.waitForLoadState("networkidle");
    }
  }

  async updateProfileInformation(name, phone, gender) {
    await this.profileMenu.click();
    await this.editProfileButton.click();
    await this.fullNameInput.fill(name);
    await this.phoneNumberInput.fill(phone);
    await this.genderDropdown.selectOption({ label: gender });
    await this.saveButton.click();
    await this.page.waitForLoadState("load");
  }
}
