import { defineConfig } from 'vite'
import million from 'million/compiler';
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({optimize: true, }), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
