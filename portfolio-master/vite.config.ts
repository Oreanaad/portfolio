import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 🚨 CAMBIA ESTA LÍNEA 🚨
  base: './', // Esto asegura que las rutas se construyan de forma relativa.
  // o base: process.env.VITE_BASE_PATH || './', si necesitas la variable de entorno.

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})