import { expect, test } from '@playwright/test';

test('The home page should contain the main information', async ({ page }) => {
  await page.goto('/portfolio/work-experience');
  await expect(page).toHaveScreenshot(); // Takes a screenshot of the page.

  // It should contain my name in the title.
  await expect(page.title()).resolves.toMatch('Valentin Vignal - Work Experience');

  // It should contain my work experience.
  await expect(page.getByText("Novade Solutions")).toHaveCount(3)
  await expect(page.getByText("Novade Solutions - Senior Full Stack Developer")).toBeVisible
  await expect(page.getByText("Novade Solutions - Software Developer")).toBeVisible
  await expect(page.getByText("Novade Solutions - Part time Software Developer")).toBeVisible

});
