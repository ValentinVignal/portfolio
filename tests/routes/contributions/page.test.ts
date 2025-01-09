import { expect, test } from '@playwright/test';
import { options } from '$lib/data/themes';
import { setTheme } from '../../utils/utils';

test('It should display the contributions page', async ({ page }) => {
	await page.goto('/portfolio/contributions');

	// It should have the correct title.
	await expect(page.title()).resolves.toEqual('Valentin Vignal - Contributions');

	// It should contain the contributions.
	await expect(page.getByText('Flutter', { exact: true })).toBeVisible();
	await expect(page.getByText('Flutter packages', { exact: true })).toBeVisible();
	await expect(page.getByText('go_router', { exact: true }).first()).toBeVisible();
	await expect(page.getByText('riverpod', { exact: true }).first()).toBeVisible();
	await expect(page.getByText('ferry', { exact: true }).first()).toBeVisible();
	await expect(page.getByText('drift', { exact: true }).first()).toBeVisible();
	await expect(page.getByText('Nestjs-query', { exact: true }).first()).toBeVisible();

	await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});

test('It should display the contributions page with a tall screen', async ({ page }) => {
	page.setViewportSize({ width: 1280, height: 1200 });
	await page.goto('/portfolio/contributions');

	// It should have the correct title.
	await expect(page.title()).resolves.toEqual('Valentin Vignal - Contributions');

	// It should contain the contributions.
	await expect(page.getByText('Flutter', { exact: true })).toBeVisible();
	await expect(page.getByText('Flutter packages', { exact: true })).toBeVisible();
	await expect(page.getByText('go_router', { exact: true }).first()).toBeVisible();
	await expect(page.getByText('riverpod', { exact: true }).first()).toBeVisible();
	await expect(page.getByText('ferry', { exact: true }).first()).toBeVisible();
	await expect(page.getByText('drift', { exact: true }).first()).toBeVisible();
	await expect(page.getByText('Nestjs-query', { exact: true }).first()).toBeVisible();

	await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});

for (const [themeId, theme] of options) {
	test(`It should display the expanded contributions page - ${theme} theme`, async ({ page }) => {
		page.setViewportSize({ width: 1280, height: 2000 });

		await page.goto('/portfolio/contributions');

		await setTheme(page, themeId);

		// Reverse order so the expand animation of one doesn't affect the next
		// click.
		await page.getByText('Nestjs-query', { exact: true }).first().click({ force: true });
		await page.getByText('drift', { exact: true }).first().click({ force: true });
		await page.getByText('ferry', { exact: true }).first().click({ force: true });
		await page.getByText('riverpod', { exact: true }).first().click({ force: true });
		await page.locator('.title').getByText('go_router').click({ force: true });
		await page.getByText('Flutter packages', { exact: true }).click({ force: true });
		await page.getByText('Flutter', { exact: true }).click({ force: true });

		// It should contain the contributions.
		await expect(page.getByText('Flutter', { exact: true })).toBeVisible();
		await expect(page.getByText('Flutter packages', { exact: true })).toBeVisible();
		await expect(page.getByText('go_router', { exact: true }).first()).toBeVisible();
		await expect(page.getByText('riverpod', { exact: true }).first()).toBeVisible();
		await expect(page.getByText('ferry', { exact: true }).first()).toBeVisible();
		await expect(page.getByText('drift', { exact: true }).first()).toBeVisible();
		await expect(page.getByText('Nestjs-query', { exact: true }).first()).toBeVisible();

		await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
	});
}
