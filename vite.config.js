import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Bundle analyzer - generates stats.html after build
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'stats.html'
    })
  ],
  build: {
    // Split vendor chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // React and React-DOM
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],

          // UI libraries
          'ui-vendor': ['framer-motion', 'react-icons'],

          // Markdown and related
          'markdown-vendor': [
            'react-markdown',
            'remark-gfm',
            'rehype-highlight',
            'rehype-raw',
            'highlight.js'
          ],

          // i18n
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],

          // Utilities
          'utils-vendor': ['date-fns']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,

    // Enable CSS code splitting
    cssCodeSplit: true
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion'
    ]
  },

  // Server configuration
  server: {
    // Enable gzip compression
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
