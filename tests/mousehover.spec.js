import { test, expect } from '@playwright/test';
import { MouseHover, MouseHoverPage } from '../pages/mousehover';


    test('should hover over Point Me and click Laptop', async ({ page }) => {
        const hoverPage = new MouseHoverPage(page);

        await hoverPage.goto();
        await hoverPage.hoverPointMe();

        await page.waitForTimeout(2000);
        
        await hoverPage.clickLaptop();
    });

