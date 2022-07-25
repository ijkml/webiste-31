<script setup>
useHead({
  title: 'Moses Laurence | Web Developer',
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
  <main class="py-20 px-10 text-center">
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
}

html {
  overflow-y: scroll;
  background: @blk-1;
  color: #eee;
  font-family: 'Graphik', system-ui, -apple-system, Ubuntu, sans-serif;
}
</style>
