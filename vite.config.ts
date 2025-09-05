import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      "/api": {
        target: "https://script.google.com/macros/s/AKfycbyny7OidmEOVS6kGBdf7uZRq9FzkDSU75H8jULgsbZ2L_8IiXc1ABOsqGFhs9b4bmZg/exec",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
