export class SignupAccount{
  constructor(page) {
    this.page = page;

    // Signup Page Locators
    this.nameInput = page.locator('input[name="name"]');
    this.emailInput = page.locator('input[name="email"]');
    this.signupButton = page.getByRole('button', { name: 'Signup' });

    // Optional: Error message
    this.emailExistsError = page.locator('text=Email Address already exist!');
  }

  // Go to Signup Page
  async goto() {
    await this.page.goto('http://automationexercise.com/signup');
  }

  // Create new account
  async createAccount(name, email) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  }

  // Signup flow helper
  async signup(name, email) {
    await this.goto();
    await this.createAccount(name, email);
  }
}