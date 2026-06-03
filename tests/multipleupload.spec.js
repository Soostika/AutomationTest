const { test, expect } = require('@playwright/test');
const path = require('path');

  test('Upload Multiple Files', async ({ page }) => {
    // Step 1: Open site
    await page.goto('https://testautomationpractice.blogspot.com');

    // Step 2: Locate multiple file input
    const multipleFileInput = page.locator('#multipleFilesInput');
    
    // Step 3 : Scroll to element
    await multipleFileInput.scrollIntoViewIfNeeded();

    // Step 4: Upload multiple files
    await multipleFileInput.setInputFiles([
        path.join(__dirname, 'text.txt'),
        path.join(__dirname, 'text2.txt')
    ]);

    
    // Step 5: Wait (only for observation)
    await page.waitForTimeout(2000);
});


