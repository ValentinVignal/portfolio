import { options } from '$lib/data/themes';
import { expect, test } from '@playwright/test';
import { setTheme } from '../../utils/utils';

for (const [themeId, theme] of options) {
	test(`It should display the skills page - ${theme}`, async ({ page }) => {
		await page.goto('/portfolio/skills');

		await setTheme(page, themeId);

		// It should have the correct title.
		await expect(page).toHaveTitle('Valentin Vignal - Skills');

		// It should contain the skills.
		await expect(page.getByText('Flutter')).toBeVisible();
		await expect(page.getByText('Dart')).toBeVisible();
		await expect(page.getByText('TypeScript')).toBeVisible();
		await expect(page.getByText('PostgresQL')).toBeVisible();
		await expect(page.getByText('Riverpod')).toBeVisible();
		await expect(page.getByText('GraphQL')).toBeVisible();
		await expect(page.getByText('go_router')).toBeVisible();
		await expect(page.getByText('Drift')).toBeVisible();
		await expect(page.getByText('Ferry')).toBeVisible();
		await expect(page.getByText('Nestjs-query')).toBeVisible();
		await expect(page.getByText('NestJS', { exact: true })).toBeVisible();
		await expect(page.getByText('Provider')).toBeVisible();
		await expect(page.getByText('Svelte ')).toBeVisible();
		await expect(page.getByText('Built value')).toBeVisible();
		await expect(page.getByText('Freezed')).toBeVisible();
		await expect(page.getByText('SQLite')).toBeVisible();
		await expect(page.getByText('Python')).toBeVisible();
		await expect(page.getByText('Firebase ')).toBeVisible();
		await expect(page.getByText('Github actions')).toBeVisible();
		await expect(page.getByText('VSCode')).toBeVisible();
		await expect(page.getByText('React')).toBeVisible();

		await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
	});
}
