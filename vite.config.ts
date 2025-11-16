import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'VeriVoto',
        short_name: 'VeriVoto',
        description: 'Aplicación informativa para votantes y miembros de mesa.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1A73E8',
        icons: [
          {
            src: 'src/assets/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'src/assets/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
