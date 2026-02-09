import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Essential for GitHub Pages project site deployment
  // Matches https://lllogggs.github.io/borderguide/
  base: '/borderguide/',
})