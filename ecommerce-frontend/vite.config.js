import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Port of the backend server (override with BACKEND_PORT env variable)
const backendPort = process.env.BACKEND_PORT || 3000;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api" : {
        target: `http://localhost:${backendPort}`
      },

      "/images" : {
        target: `http://localhost:${backendPort}`
      }

    }
  }
})
