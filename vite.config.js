import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages proje URL: /Portfolio-web/  |  Özel domain: VITE_BASE=/ yarn build
export default defineConfig({
  plugins: [react()],
  // Dev: /  |  GitHub Pages: workflow VITE_BASE=/Portfolio-web/  |  Domain: VITE_BASE=/
  base: process.env.VITE_BASE || '/',
})
