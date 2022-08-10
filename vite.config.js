import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
        }),
        react(),
        chunkSplitPlugin({
            strategy: 'single-vendor',
            customSplitting: {
                // `react` and `react-dom` will be bundled together in the `react-vendor` chunk (with their dependencies, such as object-assign)
                'react-vendor': ['react', 'react-dom'],
                // Any file that includes `utils` in src dir will be bundled in the `utils` chunk
                'container': [/ressources/]
            }
        })
    ],
    test: {
        globals: true,
    },
});
