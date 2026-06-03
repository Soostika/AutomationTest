const { test, expect } = require("@playwright/test");
const { ContactPage } = require("../pages/ContactPage");

test("Contact Form Test", async ({ page }) => {
  // Step 1: Open website
  await page.goto("https://www.pavanonlinetrainings.com/#contact");

  // Step 2: Wait until page fully loads
  await page.waitForLoadState("networkidle");

  // Step 3: Create object of ContactPage
  const contactPage = new ContactPage(page);

  // Step 4: Verify Contact Us section is visible
await expect(
    page.getByText('Contact', { exact: false }).first()
).toBeVisible();
    timeout: 10000,

  // Step 5: Fill the contact form
  await contactPage.fillContactForm({
    name: "Swastika",
    email: "swastika@gmail.com",
    phone: "9800000000",
    message: "This is automation testing message",
  });
});
