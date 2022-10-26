import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [
    react()
  ],
  build: {
    target: 'es2015',
    cssCodeSplit: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 200,
    rollupOptions: {
      output: {
        entryFileNames: 'static/js/[name]-[hash].js',
        chunkFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks (id) {
          if (id.includes('node_modules')) {
            if (id.includes('lodash-es')) {
              console.log(id)
            }

            const chunks = String(id).split('node_modules/')[1].split('/')
            switch (chunks[0]) {
              case 'react':
              case 'react-dom':
              case 'lodash-es':
                return chunks[0]
              default:
                return 'vendor'
            }
          }
        }
      }
    }
  }
})
