import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['/src/lib/**/*.jpg', '/src/lib/**/*.png', '/src/lib/**/*.svg'],
});
