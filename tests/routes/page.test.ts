import { options } from '$lib/data/themes';
import { expect, test } from '@playwright/test';
import { setTheme } from '../utils/utils';

for (const [themeId, theme] of options) {
	test(`The home page should contain the main information - ${theme}`, async ({ page }) => {
		await page.goto('/');

		await setTheme(page, themeId);

		// It should contain my name in the title.
		await expect(page).toHaveTitle('Valentin Vignal');

		// It should a sentence to introduce myself.
		await expect(page.getByText("Hello! I'm Valentin Vignal.")).toBeVisible();

		// It should contain a link to my current job.
		const prudentialLink = page.locator('a[href="https://www.prudentialplc.com"]');
		expect(prudentialLink).toBeVisible();

		await expect(page).toHaveScreenshot(); // Takes a screenshot of the page.
	});
}
