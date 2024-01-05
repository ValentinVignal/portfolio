import { expect, test } from '@playwright/test';

test('The home page should contain the main information', async ({ page }) => {
  await page.goto('/portfolio/work-experience/novade-solutions');

  // It should contain my name in the title.
  await expect(page.title()).resolves.toEqual('Valentin Vignal - Novade');

  // It should contain my achievements.
  await expect(page.getByText("Some achievements")).toBeVisible();

  await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});
