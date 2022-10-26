import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import analyze from 'rollup-plugin-analyzer'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    chunkSplitPlugin({
      strategy: 'default',
      customSplitting: {
        'react-vendor': ['react', 'react-dom'],
        'chakra-vendor': ['@chakra-ui/react', '@chakra-ui/icons', '@emotion/react', '@emotion/styled', 'framer-motion']
      }
    })
  ],
  build: {
    target: 'es2015'
  }
})
