import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg', 'img/*.jpg'],
      manifest: {
        name: 'SoataGo - Guía turística de Soatá',
        short_name: 'SoataGo',
        description: 'Qué hacer, qué comer y a dónde ir en Soatá, Boyacá.',
        lang: 'es-CO',
        theme_color: '#a65724',
        background_color: '#fdf6ef',
        display: 'standalone',
        start_url: '/',
        icons: [{ src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }],
      },
      workbox: { globPatterns: ['**/*.{js,css,html,svg,jpg}'], navigateFallback: '/index.html' },
    }),
  ],
})
