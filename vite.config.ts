import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [reactRouter(), tsconfigPaths(), eslint()],

  server: {
    hmr: {
      overlay: false,
    },
  },
}));
