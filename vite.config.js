import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Expose the app on all network interfaces
    port: process.env.PORT || 5173,  // Use Render's port if available, otherwise default to 5173
  },
})
