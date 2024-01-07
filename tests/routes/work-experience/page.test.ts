import { expect, test } from '@playwright/test';

test('It should display the work experiences page', async ({ page }) => {
  await page.goto('/portfolio/work-experience');

  // It should have the correct title.
  await expect(page.title()).resolves.toEqual('Valentin Vignal - Work Experience');

  // It should contain my work experience.
  await expect(page.getByText("Novade Solutions")).toHaveCount(3);
  await expect(page.getByText("Novade Solutions - Senior Full Stack Developer")).toBeVisible();
  await expect(page.getByText("Novade Solutions - Software Developer")).toBeVisible();
  await expect(page.getByText("Novade Solutions - Part time Software Developer")).toBeVisible();

  await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});
