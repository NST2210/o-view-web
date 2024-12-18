import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            // Include all SVG files
            include: '**/*.svg',
        }),
    ],
    resolve: {
        alias: [{find: '~', replacement: '/src'}],
    },
    server: {
        open: true,
        port: 3030,
    },
});
