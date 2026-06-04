import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages proje URL: /Portfolio-web/  |  Özel domain: VITE_BASE=/ yarn build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/Portfolio-web/',
})
