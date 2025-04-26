import { options } from '$lib/data/themes';
import { expect, test } from '@playwright/test';
import { setTheme } from '../../utils/utils';

for (const [themeId, theme] of options) {
	test(`It should display the resume page - ${theme}`, async ({ page }) => {
		await page.route('https://drive.google.com/**/*', (route) => route.abort());
		await page.goto('/portfolio/resume');

		await setTheme(page, themeId);

		// It should have the correct title.
		await expect(page).toHaveTitle('Valentin Vignal - Resume');

		// It should contain the resume.
		await expect(page.locator('embed.resume')).toBeVisible();

		await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
	});
}
