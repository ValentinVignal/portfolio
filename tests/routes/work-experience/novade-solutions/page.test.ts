import { options } from '$lib/data/themes';
import { expect, test } from '@playwright/test';
import { setTheme } from '../../../utils/utils';

test('It should display the novade solutions page', async ({ page }) => {
	await page.route('https://lite.novade.net', (route) => route.abort());
	await page.goto('/portfolio/work-experience/novade-solutions');

	// It should have the correct title.
	await expect(page).toHaveTitle('Valentin Vignal - Novade');

	// It should contain my achievements.
	await expect(page.getByText('Some achievements')).toBeVisible();

	await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});

for (const [themeId, theme] of options) {
	test(`It should display the novade solutions page with a tall screen - ${theme}`, async ({
		page
	}) => {
		page.setViewportSize({ width: 1280, height: 2200 });
		await page.route('https://lite.novade.net', (route) => route.abort());
		await page.goto('/portfolio/work-experience/novade-solutions');

		await setTheme(page, themeId);

		await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
	});
}
