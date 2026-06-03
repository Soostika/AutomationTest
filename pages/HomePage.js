export class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goTo() {
    await this.page.goto("http://automationexercise.com");
  }
}
