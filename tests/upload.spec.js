const { test, expect } = require('@playwright/test');
const path = require('path');

test('Upload Single File', async ({ page }) => {

    // Step 1: Open site
    await page.goto('https://testautomationpractice.blogspot.com');

    // Step 2: Locate single file input
    const singleFileInput = page.locator('#singleFileInput');

    // Step 3: Scroll to element
    await singleFileInput.scrollIntoViewIfNeeded();

    // Step 4: Upload single file
    await singleFileInput.setInputFiles(
        path.join(__dirname, 'text.txt')
    );

    // Step 5: Wait (only for observation)
    await page.waitForTimeout(2000);
});


