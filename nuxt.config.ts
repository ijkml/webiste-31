import { fileURLToPath } from 'url';
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
  buildModules: ['nuxt-windicss'],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  alias: {
    '@img': fileURLToPath(new URL('./assets/images', import.meta.url)),
  },
  css: ['@/assets/styles/root.less'],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/assets/styles/variables.less";',
        },
      },
    },
  },
});
