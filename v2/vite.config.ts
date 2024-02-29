import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3568
  },
  plugins: [
    react()
  ],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
})
