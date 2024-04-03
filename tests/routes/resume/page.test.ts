import { expect, test } from '@playwright/test';

test('It should display the resume page', async ({ page }) => {
	await page.goto('/portfolio/resume');

	// It should have the correct title.
	await expect(page.title()).resolves.toEqual('Valentin Vignal - Resume');

	// It should contain the resume.
	await expect(page.locator('embed.resume')).toBeVisible();

	await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});
