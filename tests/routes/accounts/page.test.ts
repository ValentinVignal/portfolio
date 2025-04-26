import { options } from '$lib/data/themes';
import { expect, test } from '@playwright/test';
import { setTheme } from '../../utils/utils';

for (const [themeId, theme] of options) {
	test(`It should display the accounts page - ${theme}`, async ({ page }) => {
		await page.goto('/portfolio/accounts');

		await setTheme(page, themeId);

		// It should have the correct title.
		await expect(page).toHaveTitle('Valentin Vignal - Accounts');

		// It should contain the accounts.
		await expect(page.getByText('GitHub')).toBeVisible();
		await expect(page.getByText('StackOverflow')).toBeVisible();
		await expect(page.getByText('LinkedIn')).toBeVisible();
		await expect(page.getByText('X', { exact: true })).toBeVisible();
		await expect(page.getByText('Discord')).toBeVisible();
		await expect(page.getByText('Reddit')).toBeVisible();
		await expect(page.getByText('Google Play')).toBeVisible();
		await expect(page.getByText('val.vignal@live.fr')).toBeVisible();

		await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
	});
}
