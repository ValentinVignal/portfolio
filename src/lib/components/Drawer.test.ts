import { render, screen } from '@testing-library/svelte';
import { afterEach, beforeAll, beforeEach, describe, expect, it, test, vi } from 'vitest';
import Drawer from './Drawer.svelte';

describe('LogoTitle', async () => {
	let processEnvPublicNoProfilePicture: string | undefined;
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

	beforeEach(() => {
		processEnvPublicNoProfilePicture = process.env.PUBLIC_NO_PROFILE_PICTURE;
	});

	afterEach(() => {
		process.env.PUBLIC_NO_PROFILE_PICTURE = processEnvPublicNoProfilePicture;
		vi.clearAllMocks();
		vi.resetModules();
	});
	it('should render with the profile picture', () => {
		const renderResult = render(Drawer);

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

	it('should render without the profile picture', () => {
		process.env.PUBLIC_NO_PROFILE_PICTURE = 'true';
		const renderResult = render(Drawer);

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
