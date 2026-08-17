import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Must be absolute, not './'. With a relative base the asset URLs are resolved
  // against the current path, so a deep link like /projects would request
  // /assets/... correctly but any nested route would 404 on its own scripts.
  base: '/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  build: {
    rollupOptions: {
      output: {
        // Split the heaviest vendors so a change to app code does not bust the
        // cache for all of MUI on repeat visits.
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material', '@mui/lab'],
        },
      },
    },
  },
})
