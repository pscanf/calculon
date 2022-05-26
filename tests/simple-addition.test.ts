import { expect, test } from "@playwright/test";

test("Simple addition scenario", async ({ page }) => {
    // Exercise + verify
    await page.goto("/");
    expect(await page.screenshot()).toMatchSnapshot("initial.png");

    await page.click('.Button:text("1")');
    await page.click('.Button:text("+")');
    await page.click('.Button:text("2")');
    await page.click('.Button:text("=")');

    expect(await page.screenshot()).toMatchSnapshot("result.png");

    await expect(page.locator(".CalculatorDisplays")).toContainText("1+2");
});
