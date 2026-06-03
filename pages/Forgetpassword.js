export class LoginPage {
  constructor(page) {
    this.page = page;

    // Login locators
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');

    // Forgot Password locators
    this.forgotPasswordLink = page.locator("text=Forgot your password?");
    this.resetUsernameInput = page.locator('input[name="username"]');
    this.resetButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator(
      'h6:has-text("Reset Password link sent successfully")',
    );
  }

  async gotoLoginPage() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    await this.usernameInput.waitFor({ state: "visible" });
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // ✅ Forgot Password Methods
  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }

  async resetPassword(username) {
    await this.resetUsernameInput.fill(username);
    await this.resetButton.click();
  }

  async verifyResetSuccess() {
    await this.successMessage.waitFor({ state: "visible" });
  }
}
