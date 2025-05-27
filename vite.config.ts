import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react({
    babel: {
      plugins: [
        ['styled-components', {
          displayName: true,
          ssr: false
        }]
      ]
    }
  })],
})
