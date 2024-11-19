import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	],

	// Add the server proxy configuration here
	server: {
		proxy: {
			'/api': 'http://localhost:5000' // Proxy all requests to /api to your Express server
		}
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
