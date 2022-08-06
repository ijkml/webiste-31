import { fileURLToPath } from 'url';
import { defineNuxtConfig } from 'nuxt';
import svgLoader from 'vite-svg-loader';
import nuxtUmami from 'nuxt-umami';

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', nuxtUmami],
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
    plugins: [
      svgLoader({
        defaultImport: 'url',
      }),
    ],
  },
  umami: {
    scriptUrl: 'https://ijkml-umami.up.railway.app/umami.js',
    websiteId: '73857c4b-3b4c-4edb-9274-d43e3e4757f7',
    domains: 'netlify.app',
  },
});
