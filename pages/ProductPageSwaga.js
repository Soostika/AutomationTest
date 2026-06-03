export class HomePage {
  constructor(page) {
    this.page = page;

    this.addToCartBtn = page.getByRole("button", { name: "Add to cart" });
    this.cartIcon = page.locator(".shopping_cart_link");
  }

  // ✅ MUST EXIST (this is what your error is about)
  async addProductToCart() {
    await this.addToCartBtn.first().click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
