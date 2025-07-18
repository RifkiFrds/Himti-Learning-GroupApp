import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'HIMTI Learning Group',
        short_name: 'HIMTI Learn',
        description: 'Platform komunitas untuk mahasiswa Teknik Informatika UMT untuk belajar bersama.',
        theme_color: '#8B5CF6', 
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'himti-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'himti-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
     screenshots: [
          {
            src: 'manifest-web.png', 
            sizes: '1280x720', 
            type: 'image/png',
            form_factor: 'wide', 
            label: 'Tampilan Desktop Aplikasi'
          },
          {
            src: 'manifest-mobile.png',
            sizes: '540x720',
            type: 'image/png',
            form_factor: 'narrow', 
            label: 'Tampilan Mobile Aplikasi'
          }
        ]
      }
    })
  ],
})