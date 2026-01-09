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
        // Manual chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          // React and React-DOM
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],

          // UI libraries
          'ui-vendor': ['framer-motion', 'react-icons'],

          // i18n
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,

    // Enable CSS code splitting
    cssCodeSplit: true,

    // Minify options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      },
      format: {
        comments: false
      }
    },

    // Source maps for production (optional, remove for smaller bundles)
    sourcemap: false,

    // Set target browsers
    target: 'es2015'
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
      'Access-Control-Allow-Origin': '*',
      'Keep-Alive': 'timeout=5, max=1000'
    }
  },

  // Preview server configuration
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  }
})
