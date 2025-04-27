import { render, screen } from '@testing-library/svelte';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
vi.mock('$env/static/public', () => {
	return {
		PUBLIC_NO_PROFILE_PICTURE: 'true'
	};
});
import Drawer from './Drawer.svelte';

describe('LogoTitle', async () => {
	beforeAll(() => {
		vi.mock('$app/state', async () => {
			return {
				page: {
					url: new URL('https://example.com')
				}
			};
		});
		vi.mock('$app/path', async () => {
			return {
				base: 'base'
			};
		});
	});

	afterEach(() => {
		vi.clearAllMocks();
		vi.resetModules();
	});
	it('should render with the profile picture', () => {
		const renderResult = render(Drawer);

		expect(screen.getByRole('link', { name: 'Profile' })).toBeVisible();
		expect(screen.getByText('Home')).toBeTruthy();
		expect(screen.getByText('Education')).toBeTruthy();
		expect(screen.getByText('Work experience')).toBeTruthy();
		expect(screen.getByText('Projects')).toBeTruthy();
		expect(screen.getByText('Contributions')).toBeTruthy();
		expect(screen.getByText('Skills')).toBeTruthy();
		expect(screen.getByText('Accounts')).toBeTruthy();
		expect(screen.getByText('My Resume')).toBeTruthy();

		expect(screen.getByText('Theme')).toBeTruthy();

		renderResult.unmount();
	});
});
