import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [, tailwindcss(), sveltekit(), enhancedImages()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}', '__mocks__/**/*'],
		setupFiles: ['./tests/setup.ts']
	},
	define: {
		'process.env': {}
	}
});
