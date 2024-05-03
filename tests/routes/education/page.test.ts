import { expect, test } from '@playwright/test';

test('It should display the education page', async ({ page }) => {
	await page.goto('/portfolio/education');

	// It should have the correct title.
	await expect(page.title()).resolves.toEqual('Valentin Vignal - Education');

	// It should contain the education details.
	await expect(
		page.getByText('National University of Singapore - School of Computing')
	).toBeVisible();
	await expect(page.getByText('CentraleSupélec')).toBeVisible();
	await expect(page.getByText('Lycée Masséna')).toBeVisible();

	await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});

test('It should display the education page with a tall screen', async ({ page }) => {
	page.setViewportSize({ width: 1280, height: 850 });
	await page.goto('/portfolio/education');

	await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});
