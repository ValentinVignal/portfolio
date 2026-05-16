import { options } from '$lib/data/themes';
import { expect, test } from '@playwright/test';
import { setTheme } from '../../../utils/utils';

test('It should display the prudential page', async ({ page }) => {
	await page.route('https://pruservices.prudential.com.sg/app', (route) => route.abort());
	await page.goto('/portfolio/work-experience/prudential-plc');

	// It should have the correct title.
	await expect(page).toHaveTitle('Valentin Vignal - Prudential plc');

	await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});

for (const [themeId, theme] of options) {
	test(`It should display the prudential page with a tall screen - ${theme}`, async ({ page }) => {
		page.setViewportSize({ width: 1280, height: 1500 });
		await page.route('https://pruservices.prudential.com.sg/app', (route) => route.abort());
		await page.goto('/portfolio/work-experience/prudential-plc');

		await setTheme(page, themeId);

		await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
	});
}
