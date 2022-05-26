import { expect, test } from "@playwright/test";

test("when the user clicks a digit button, the digit should appear in the upper display", async ({
    page,
}) => {
    // Exercise + verify multi times
    await page.goto("/");
    expect(await page.screenshot()).toMatchSnapshot("initial.png");

    await page.click("text=0");
    await expect(
        page.locator("[data-testid=CalculatorDisplays]")
    ).toContainText("0");
    expect(await page.screenshot()).toMatchSnapshot("after-click.png");
});
