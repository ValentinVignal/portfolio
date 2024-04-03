import { render, screen } from '@testing-library/svelte';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import Drawer from './Drawer.svelte';

describe('LogoTitle', async () => {
	const stores = await vi.hoisted(() => import('../../../__mocks__/app/stores'));

	beforeAll(() => {
		vi.mock('$app/stores', async () => {
			return stores;
		});
	});
	it('should render the logo title', () => {
		render(Drawer);

		expect(screen.getByAltText('Profile')).toBeTruthy();

		expect(screen.getByText('Home')).toBeTruthy();
		expect(screen.getByText('Education')).toBeTruthy();
		expect(screen.getByText('Work experience')).toBeTruthy();
		expect(screen.getByText('Projects')).toBeTruthy();
		expect(screen.getByText('Contributions')).toBeTruthy();
		expect(screen.getByText('Skills')).toBeTruthy();
		expect(screen.getByText('Accounts')).toBeTruthy();

		expect(screen.getByText('Theme')).toBeTruthy();
	});
});
