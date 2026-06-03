
export function generateTestEmail() {
  return `test_${Date.now()}@example.com`;
}

export function getRandomUsername() {
  return `user_${Math.floor(Math.random() * 100000)}`;
}

export function generateNewPassword() {
  return `Pass@${Math.random().toString(36).slice(-8)}A1`;
}

test("Complete Account Information Form", async ({ page }) => {
  const name = getRandomUsername();
  const email = generateTestEmail();
  const password = generateNewPassword();

  await page.goto("http://automationexercise.com/signup");

  // -------------------------
  // Step 1: Basic Signup
  // -------------------------
  await page.fill('input[name="name"]', name);
  await page.fill('input[name="email"]', email);
  await page.click('button:has-text("Signup")');

  // -------------------------
  // Step 2: Enter Account Information
  // -------------------------
  await page.check('input[value="Mr"]');

  await page.fill("#password", password);

  await page.selectOption("#days", "10");
  await page.selectOption("#months", "5");
  await page.selectOption("#years", "2000");

  await page.check("#newsletter");
  await page.check("#optin");

  // -------------------------
  // Step 3: Address Information
  // -------------------------
  await page.fill("#first_name", name);
  await page.fill("#last_name", "Regmi");
  await page.fill("#company", "Test Company");
  await page.fill("#address1", "Kathmandu");
  await page.fill("#address2", "Bagmati");
  await page.selectOption("#country", "India");
  await page.fill("#state", "Bagmati");
  await page.fill("#city", "Kathmandu");
  await page.fill("#zipcode", "44600");
  await page.fill("#mobile_number", "9800000000");

  // -------------------------
  // Submit
  // -------------------------
  await page.click('button:has-text("Create Account")');

  // Assertion
  await expect(page).toHaveURL(/account_created|success/);
});
