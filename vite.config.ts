import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    assetsInclude: ['**/*.mov'],
    plugins: [
      react(),
      tailwindcss(),
      viteImagemin({
        gifsicle: { optimizationLevel: 7 },
        mozjpeg: { quality: 80, autorotate: true } as any,
        pngquant: { quality: [0.8, 0.9], speed: 4 },
        svgo: { plugins: [{ name: 'removeViewBox' }] },
        webp: { quality: 80 },
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      proxy: {
        '/api': 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-motion': ['motion/react'],
            'vendor-leaflet': ['leaflet', 'react-leaflet', 'leaflet.markercluster', 'react-leaflet-markercluster'],
          },
        },
      },
    },
  };
});
