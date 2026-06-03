

export class LoginPage {
  constructor(page) {
    this.page = page;
   this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async gotoLoginPage() {
    await this.page.goto(
      "http://automationexercise.com",
    );

    await this.usernameInput.waitFor({ state: "visible" });
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
