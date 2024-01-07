import { expect, test } from '@playwright/test';

test('It should display the projects page', async ({ page }) => {
  await page.goto('/portfolio/projects');

  // It should have the correct title.
  await expect(page.title()).resolves.toEqual('Valentin Vignal - Projects');

  // It should contain the project.
  await expect(page.getByText("ntm", { exact: true })).toBeVisible();
  await expect(page.getByText("Padelistas")).toBeVisible();
  await expect(page.getByText("Hider")).toBeVisible();
  await expect(page.getByText("Periodik")).toBeVisible();
  await expect(page.getByText("Portfolio", { exact: true })).toBeVisible();
  await expect(page.getByText("Action dart analyze")).toBeVisible();
  await expect(page.getByText("animated_collection")).toBeVisible();
  await expect(page.getByText("Themed color palette")).toBeVisible();
  await expect(page.getByText("Chrome markdown emoji")).toBeVisible();
  await expect(page.getByText("midi generator")).toBeVisible();

  await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});
