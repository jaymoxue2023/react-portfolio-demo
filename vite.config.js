import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@context': '/src/context',
      '@data': '/src/data',
      '@hooks': '/src/hooks',
      '@images': '/src/assets/images',
      '@pages': '/src/pages',
    },
  },
});
