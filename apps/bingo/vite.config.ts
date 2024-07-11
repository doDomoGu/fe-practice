import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    },
    extensions: ['.tsx']
  },
  server: {
    port: 5278
  }
})
