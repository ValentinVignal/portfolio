import { expect, test } from '@playwright/test';

test('It should display the education page', async ({ page }) => {
  await page.goto('/portfolio/education');

  // It should have the correct title.
  await expect(page.title()).resolves.toEqual('Valentin Vignal - Education');

  // It should contain the project.
  await expect(page.getByText("National University of Singapore - School of Computing")).toBeVisible();
  await expect(page.getByText("CentralSupélec")).toBeVisible();
  await expect(page.getByText("Lycée Masséna")).toBeVisible();

  await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});
