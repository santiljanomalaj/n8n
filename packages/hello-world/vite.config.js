import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const publicPath = process.env.VUE_APP_URL_BASE_API || '/';

export default defineConfig({
	define: {
		BASE_PATH: `'${publicPath}'`,
	},
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			helloworld: resolve(__dirname, 'src'),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src', 'main.js'),
			name: 'HelloWorld',
			fileName: (format) => `helloworld.${format}.ts`,
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue'],
			output: {
				exports: 'named',
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
});
