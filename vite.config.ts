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
        target: "https://script.google.com/macros/s/AKfycbxMZQDCogSMFe5g85Qa18aO6KCfKI3JYGQg9ffTBQ_LcG0tcGVm5G8GWh9Xv51OgGLh/exec",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
