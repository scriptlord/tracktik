import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';
import vue from '@vitejs/plugin-vue';

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      vue({
        template: {
          compilerOptions: {
            nodeTransforms: []
          }
        }
      })
    ],
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      globals: true,
    },
    clearScreen: false,
    build: {
      sourcemap: false
    },
    define: {
      __VUE_PROD_DEVTOOLS__: false,
    }
  })
);