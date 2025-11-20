import { options } from '$lib/data/themes';
import { expect, test } from '@playwright/test';
import { setTheme } from '../../utils/utils';

test('It should display the hobbies page', async ({ page }) => {
	await page.goto('/portfolio/hobbies');

	// It should have the correct title.
	await expect(page).toHaveTitle('Valentin Vignal - Hobbies');

	// It should contain the music section.
	await expect(page.getByText('Music')).toBeVisible();
	await expect(page.getByText('Nikaya')).toBeVisible();
	await expect(page.getByText('Veval')).toBeVisible();
	await expect(page.getByText('Arquets')).toBeVisible();

	await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});

for (const [themeId, theme] of options) {
	test(`It should display the hobbies page with a tall screen - ${theme}`, async ({ page }) => {
		page.setViewportSize({ width: 1000, height: 1000 });
		await page.goto('/portfolio/hobbies');

		await setTheme(page, themeId);

		await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
	});
}
