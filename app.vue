<script setup>
useHead({
  title: 'Moses Laurence | Web Developer',
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
  <NuxtLayout cl>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="less">
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

:root {
  --theme-pri: @pri;
  --theme-sec: @sec;
  --theme-tet: @tet;
  --theme-blk-1: @blk-1;
  --theme-blk-2: @blk-2;
}

html {
  color-scheme: dark;
  overflow-y: scroll;

  @apply bg-blk-1 text-white;
}
</style>
