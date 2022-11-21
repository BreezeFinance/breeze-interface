import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: true,
      filename: 'analyser.html',
      open: true
    })
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
            const chunks = id.split('node_modules/')[1].split('/')
            switch (chunks[0]) {
              case 'react':
              case 'react-dom':
              case 'lodash-es':
              case '@chakra-ui':
              case 'framer-motion':
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
