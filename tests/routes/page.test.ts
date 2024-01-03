import { expect, test } from '@playwright/test';

test('The home page should contain the main information', async ({ page }) => {
  await page.goto('/');

  // It should contain my name in the title.
  await expect(page.title()).resolves.toMatch('Valentin Vignal');

  // It should a sentence to introduce myself.
  await expect(page.getByText("Hello! I'm Valentin Vignal.")).toBeVisible();

  // It should contain a link to my current job.
  const novadeLink = page.locator('a[href="https://www.novade.net/"]');
  expect(novadeLink).toBeVisible();


  await expect(page).toHaveScreenshot(); // Takes a screenshot of the page.
});
