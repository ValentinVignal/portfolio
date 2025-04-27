import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { defineConfig } from 'vitest/config';
import { svelteTesting } from '@testing-library/svelte/vite';

export default defineConfig(({ mode }) => ({
	plugins: [svelte({ hot: !process.env.VITEST }), svelteTesting()],
	test: {
		environment: 'happy-dom',
		exclude: ['**/node_modules/**', 'tests/**'],
		setupFiles: ['./vitest-setup.js']
	},
	resolve: {
		conditions: mode === 'test' ? ['browser'] : [],
		alias: {
			$app: path.resolve(__dirname, '__mocks__/app'),
			$lib: path.resolve(__dirname, 'src/lib'),
			'$env/static/public': path.resolve(__dirname, '__mocks__/env/static/public')
		}
	}
}));
