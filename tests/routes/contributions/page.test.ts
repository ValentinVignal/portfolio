import { expect, test } from '@playwright/test';

test('It should display the contributions page', async ({ page }) => {
  await page.goto('/portfolio/contributions');

  // It should have the correct title.
  await expect(page.title()).resolves.toEqual('Valentin Vignal - Contributions');

  // It should contain the contributions.
  await expect(page.getByText("Flutter", { exact: true })).toBeVisible();
  await expect(page.getByText("Flutter packages", { exact: true })).toBeVisible();
  await expect(page.getByText("go_router", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("riverpod", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("ferry", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("drift", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("Nestjs-query", { exact: true }).first()).toBeVisible();

  await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});
