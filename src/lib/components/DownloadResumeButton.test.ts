import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

import { afterAll, afterEach, beforeAll, describe, expect, it, vi, beforeEach } from 'vitest';
import DownloadResumeButton from './DownloadResumeButton.svelte';

const paths: string[] = [];

const server = setupServer(
	// Describe network behavior with request handlers.
	// Tip: move the handlers into their own module and
	// import it across your browser and Node.js setups!
	http.get('/src/lib/assets/ValentinVignal.pdf', ({ request }) => {
		paths.push(request.url);
		return HttpResponse.text();
	})
);

// Enable request interception.
beforeAll(() => server.listen());

beforeEach(() => {
	window.gtag = vi.fn() as Gtag.Gtag;
});

// Reset handlers so that each test could alter them
// without affecting other, unrelated tests.
afterEach(() => {
	server.resetHandlers();
	paths.splice(0, paths.length);
});

// Don't forget to clean up afterwards.
afterAll(() => server.close());
describe('DownloadResumeButton', () => {
	it('should render the logo title', async () => {
		render(DownloadResumeButton);

		await userEvent.click(screen.getByRole('link'));

		expect(paths).toHaveLength(1);
		expect(paths).toEqual(['http://localhost:3000/src/lib/assets/ValentinVignal.pdf']);

		expect(window.gtag).toHaveBeenCalledTimes(1);
		expect(window.gtag).toHaveBeenCalledWith('event', 'download_resume', undefined);
	});
});
