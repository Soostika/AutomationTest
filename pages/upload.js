import { expect } from "@playwright/test";
test('Upload Multiple Files', async ({ page }) => {

    // Step 1: Open site
    await page.goto('https://testautomationpractice.blogspot.com');

    // Step 2: Locate multiple file input
    const multipleFileInput = page.locator('#multipleFilesInput');

    // Step 3: Upload multiple files
    await multipleFileInput.setInputFiles([
        path.join(__dirname, 'text.txt'),
        path.join(__dirname, 'text2.txt')
    ]);

    // Step 4: Wait for observation
    await page.waitForTimeout(2000);
});