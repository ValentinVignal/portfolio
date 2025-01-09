import { options } from '$lib/data/themes';
import { expect, test } from '@playwright/test';
import { setTheme } from '../utils/utils';

for (const [themeId, theme] of options) {
	test(`The home page should contain the main information - ${theme}`, async ({ page }) => {
		await page.goto('/');

		await setTheme(page, themeId);

		// It should contain my name in the title.
		await expect(page.title()).resolves.toEqual('Valentin Vignal');

		// It should a sentence to introduce myself.
		await expect(page.getByText("Hello! I'm Valentin Vignal.")).toBeVisible();

		// It should contain a link to my current job.
		const novadeLink = page.locator('a[href="https://www.novade.net/"]');
		expect(novadeLink).toBeVisible();

		await expect(page).toHaveScreenshot(); // Takes a screenshot of the page.
	});
}
