import { test, expect } from "@playwright/test";
import { RightClickPage } from "../pages/rightclick";

test.describe("Right Click Action Tests", () => {
  test("should successfully right click the element", async ({ page }) => {
    const contextPage = new RightClickPage(page);

    await contextPage.goto();

    // Set dialog handler BEFORE triggering action
    page.once("dialog", async (dialog) => {
      expect(dialog.type()).toBe("alert");
      await dialog.accept();
    });

    await contextPage.rightClickAction();
    await page.waitForTimeout(2000);
  });
});
