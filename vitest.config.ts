import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		environment: 'happy-dom',
		exclude: ['**/node_modules/**', 'tests/**']
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
