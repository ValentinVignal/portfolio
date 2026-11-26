import { options } from '$lib/data/themes';
import { expect, test } from '@playwright/test';
import { setTheme } from '../../../utils/utils';

test('It should display the arta page', async ({ page }) => {
	await page.route('https://app.artafinance.com', (route) => route.abort());
	await page.goto('/portfolio/work-experience/arta-finance');

	// It should have the correct title.
	await expect(page).toHaveTitle('Valentin Vignal - Arta Finance');

	await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});

for (const [themeId, theme] of options) {
	test(`It should display the arta page with a tall screen - ${theme}`, async ({ page }) => {
		page.setViewportSize({ width: 1280, height: 1000 });
		await page.route('https://app.artafinance.com', (route) => route.abort());
		await page.goto('/portfolio/work-experience/arta-finance');

		await setTheme(page, themeId);

		await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
	});
}
