import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  const compress = process.env.COMPRESS_IMAGES === 'true';
  return {
    base: '/',
    assetsInclude: ['**/*.mov', '**/*.mp4'],
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.png', 'icon-192.png', 'icon-512.png'],
        manifest: {
          name: 'Tonton Francky',
          short_name: 'TF',
          description: 'Voyages, cuisine & projets — le site de François Barrailla',
          theme_color: '#9A6320',
          background_color: '#FFF8E7',
          display: 'standalone',
          start_url: '/',
          icons: [
            { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
          ],
        },
        workbox: {
          // Cache pages & assets, fall back to network
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,pdf}'],
          runtimeCaching: [
            {
              urlPattern: /\.pdf$/i,
              handler: 'NetworkFirst',
              options: { cacheName: 'pdfs', networkTimeoutSeconds: 10 },
            },
            {
              urlPattern: /^https:\/\/api\.github\.com\/.*/i,
              handler: 'NetworkFirst',
              options: { cacheName: 'github-api', networkTimeoutSeconds: 5 },
            },
            {
              urlPattern: /^https:\/\/.*\.cartocdn\.com\/.*/i,
              handler: 'CacheFirst',
              options: { cacheName: 'map-tiles', expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 } },
            },
          ],
        },
      }),
      ...(compress ? [viteImagemin({
        gifsicle: { optimizationLevel: 3 },
        mozjpeg: { quality: 80, autorotate: true } as any,
        pngquant: { quality: [0.8, 0.9], speed: 4 },
        svgo: { plugins: [{ name: 'removeViewBox' }] },
        webp: { quality: 80 },
      })] : []),
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
