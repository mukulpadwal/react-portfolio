import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build', // Output directory for the production build
    },
    plugins: [react()],
  };
});
