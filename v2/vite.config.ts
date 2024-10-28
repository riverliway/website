import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        experience: resolve(__dirname, 'experience/index.html'),
      }
    }
  },
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
