import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]', // Configure output asset naming
      },
    },
  },
  server: {
    host: true, // Bind server to 0.0.0.0
    port: process.env.PORT || 5173, // Use environment variable for PORT or fallback to 5173
    mimeTypes: {
      'text/css': ['css'],
      'application/javascript': ['js'],
    },
  },
});
