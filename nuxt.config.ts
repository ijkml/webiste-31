import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
  buildModules: ['nuxt-windicss'],
  experimental: {
    // reactivityTransform: true,
    // viteNode: false,
  },
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
