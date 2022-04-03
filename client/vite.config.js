const { defineConfig } = require('vite');
const path = require('path');

export default defineConfig({
	build: {
		// generate manifest.json in outDir
		manifest: true,
		rollupOptions: {
			// overwrite default .html entry
			input: ['./scripts/index.js'],
		},
	},
});
