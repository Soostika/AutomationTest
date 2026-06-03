export class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstName = page.getByPlaceholder("First Name");
    this.lastName = page.getByPlaceholder("Last Name");
    this.postalCode = page.getByPlaceholder("Zip/Postal Code");

    this.continueBtn = page.getByRole("button", { name: "Continue" });
    this.finishBtn = page.getByRole("button", { name: "Finish" });

    this.successMsg = page.locator(".complete-header");
  }

  // ✅ THIS METHOD MUST EXIST (your error)
  async fillForm(firstName, lastName, zip) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(zip);
    await this.continueBtn.click();
  }

  async finish() {
    await this.finishBtn.click();
  }

  async isSuccess() {
    return await this.successMsg.isVisible();
  }
}
