export class AccountPage {
  constructor(page) {
    this.page = page;

    // Account Page Locators
    this.accountHeader = page.locator("h1, h2").filter({ hasText: "Account" });
    this.usernameDisplay = page.locator(".username, .account-name");

    // Navigation / Menu
    this.profileMenu = page.locator(".oxd-userdropdown-tab");
    this.myAccountOption = page.getByRole("menuitem", { name: "My Account" });
    this.logoutOption = page.getByRole("menuitem", { name: "Logout" });

    // Buttons (if any)
    this.editProfileButton = page.getByRole("button", { name: "Edit" });
    this.saveButton = page.getByRole("button", { name: "Save" });
  }

  // Go to dashboard or account page
  async goto() {
    await this.page.goto(
      "https://automationexercise.com",
    );
  }

  // Open account menu
  async openProfileMenu() {
    await this.profileMenu.click();
  }

  // Navigate to My Account
  async goToMyAccount() {
    await this.openProfileMenu();
    await this.myAccountOption.click();
  }

  // Logout from account
  async logout() {
    await this.openProfileMenu();
    await this.logoutOption.click();
  }

  // Get account username text
  async getUsername() {
    return await this.usernameDisplay.textContent();
  }
}
