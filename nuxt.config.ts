import { fileURLToPath } from 'url';
import TypedRouter from 'nuxt-typed-router';
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', TypedRouter],
  buildModules: ['nuxt-windicss'],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  nuxtTypedRouter: {
    outDir: './_router',
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
