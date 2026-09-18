import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const root = import.meta.dirname;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(root, 'src'),
      '@components': resolve(root, 'src/components'),
      '@pages': resolve(root, 'src/pages'),
      '@content': resolve(root, 'src/content'),
      '@utils': resolve(root, 'src/utils'),
      '@hooks': resolve(root, 'src/hooks'),
      '@models': resolve(root, 'src/types'),
      '@styles': resolve(root, 'src/styles'),
    },
  },
  server: { port: 3000 },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
    css: true,
    // Default 5s is tight once the full suite is transforming/mounting many
    // preview components at once (17 reconstructed components as of this
    // change) — raised to avoid load-dependent timeout flakes on otherwise
    // fast (<3s in isolation) tests.
    testTimeout: 15000,
  },
});
