export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.navLoginButton = page.locator("text=LOGIN").first();
    this.emailInput = page.getByPlaceholder("Please enter your Phone or Email");
    this.passwordInput = page.getByPlaceholder("Please enter your password");
    this.loginSubmitButton = page.getByRole("button", {
      name: "LOGIN",
      exact: true,
    });
  }

  // Navigate to Daraz homepage
  async navigate() {
    await this.page.goto("https://www.daraz.com.np");
    await this.page.waitForLoadState("domcontentloaded");
  }

  // Open login modal safely
  async openLoginModal() {
    const isVisible = await this.navLoginButton.isVisible().catch(() => false);

    if (isVisible) {
      await this.navLoginButton.click();
    }
  }

  // Complete login flow
  async login(username, password) {
    await this.openLoginModal();

    // Wait for login form
    await this.emailInput.waitFor({ state: "visible" });

    // ✅ FIXED: use parameters correctly
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);

    await this.loginSubmitButton.waitFor({ state: "visible" });
    await this.loginSubmitButton.click();
  }
}