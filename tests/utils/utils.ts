import type { Page } from '@playwright/test';

export const setTheme = async (page: Page, themeId: string): Promise<void> => {
	await page.locator('label[for="theme-dropdown"]').click({ force: true });
	await page.locator(`input[id='theme-dropdown-${themeId}']`).click({ force: true });
};
