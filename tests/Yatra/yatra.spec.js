const { test, expect } = require("@playwright/test");

test('Yatra flight booking flow (search + select)', async ({ page }) => {

  // Open Yatra website
  await page.goto('https://www.yatra.com/');


  // Select "One Way"
  await page.locator('text=One Way').click();

  // Enter FROM city
  await page.locator('input[placeholder="Departure From"]').click();
  await page.locator('input[placeholder="Departure From"]').fill('Delhi'); 


  // Enter TO city
  await page.locator('input[placeholder="Going To"]').click();
  await page.locator('input[placeholder="Going To"]').fill('Mumbai');

});
 