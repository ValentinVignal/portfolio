import { options } from '$lib/data/themes';
import { expect, test } from '@playwright/test';
import { setTheme } from '../../utils/utils';
import { mount } from 'svelte';
import { setTimeout } from 'timers/promises';

test('It should display the projects page', async ({ page }) => {
	await page.goto('/portfolio/projects');

	// It should have the correct title.
	await expect(page.title()).resolves.toEqual('Valentin Vignal - Projects');

	// It should contain the project.
	await expect(page.getByText('ntm', { exact: true })).toBeVisible();
	await expect(page.getByText('Padelistas')).toBeVisible();
	await expect(page.getByText('Hider')).toBeVisible();
	await expect(page.getByText('Periodik')).toBeVisible();
	await expect(page.getByText('Portfolio', { exact: true })).toBeVisible();
	await expect(page.getByText('Action dart analyze')).toBeVisible();
	await expect(page.getByText('Pyronear')).toBeVisible();
	await expect(page.getByText('animated_collection')).toBeVisible();
	await expect(page.getByText('NotificationBlocker')).toBeVisible();
	await expect(page.getByText('Themed color palette')).toBeVisible();
	await expect(page.getByText('Chrome markdown emoji')).toBeVisible();
	await expect(page.getByText('midi generator')).toBeVisible();

	await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});

test('It should display the projects page with a tall screen', async ({ page }) => {
	page.setViewportSize({ width: 1280, height: 1300 });
	await page.goto('/portfolio/projects');

	await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});

for (const [themeId, theme] of options) {
	test(`It should display the expanded projects page - ${theme} theme`, async ({ page }) => {
		await page.route('https://ntm-pad.web.app', (route) => route.abort());
		await page.route('https://padelistas-app.web.app', (route) => route.abort());
		await page.route('https://hider-c122b.web.app', (route) => route.abort());
		await page.route('https://period-ik.web.app/', (route) => route.abort());

		page.setViewportSize({ width: 1280, height: 7000 });

		await page.goto('/portfolio/projects');

		await setTheme(page, themeId);

		// Reverse order so the expand animation of one doesn't affect the next
		// click.
		await page.getByText('midi generator').click({ force: true });
		await page.getByText('Chrome markdown emoji').click({ force: true });
		await page.getByText('Themed color palette').click({ force: true });
		await page.getByText('NotificationBlocker').click({ force: true });
		await page.getByText('animated_collection').click({ force: true });
		await page.getByText('Pyronear').click({ force: true });
		await page.getByText('Action dart analyze').click({ force: true });
		await page.getByText('Portfolio', { exact: true }).click({ force: true });
		await page.getByText('Periodik').click({ force: true });
		await page.getByText('Hider').click({ force: true });
		await page.getByText('Padelistas').click({ force: true });
		await page.getByText('ntm', { exact: true }).click({ force: true });

		// It should contain the projects.
		await expect(page.getByText('ntm', { exact: true })).toBeVisible();
		await expect(page.getByText('Padelistas')).toBeVisible();
		await expect(page.getByText('Hider')).toBeVisible();
		await expect(page.getByText('Periodik')).toBeVisible();
		await expect(page.getByText('Portfolio', { exact: true })).toBeVisible();
		await expect(page.getByText('Action dart analyze')).toBeVisible();
		await expect(page.getByText('Pyronear')).toBeVisible();
		await expect(page.getByText('animated_collection')).toBeVisible();
		await expect(page.getByText('NotificationBlocker')).toBeVisible();
		await expect(page.getByText('Themed color palette')).toBeVisible();
		await expect(page.getByText('Chrome markdown emoji')).toBeVisible();
		await expect(page.getByText('midi generator')).toBeVisible();

		await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
	});
}
