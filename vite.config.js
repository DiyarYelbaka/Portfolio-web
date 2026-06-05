import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// diyaryelbaka.com — kök domain, base her zaman /
export default defineConfig({
  plugins: [react()],
  base: '/',
})
