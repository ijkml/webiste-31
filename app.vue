<script setup>
useHead({
  title: 'Moses Laurence | UI Developer',
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
});
</script>

<template>
  <main id="layout-main">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </main>
</template>

<style lang="less">
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  color-scheme: dark;
  color: hsl(0, 0%, 75%);
  font-family: 'Signika Negative', system-ui, -apple-system, Ubuntu, sans-serif;
}

html {
  overflow-y: scroll;
  background: @blk-1;
}

#layout-main {
  @apply py-20 px-10 text-center;
}
</style>
