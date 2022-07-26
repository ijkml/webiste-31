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
  style: [{ type: 'text/css', children: `html{color:#eee;background:#111;}` }],
});
</script>

<template>
  <TheHeader />
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
  color-scheme: dark;
  color: hsl(0, 0%, 75%);
  font-family: 'Merriweather Sans', system-ui, -apple-system, Ubuntu, sans-serif;

  @apply outline-none m-0 p-0;
}

html {
  overflow-y: scroll;
  background: @blk-1;
}

* {
  scrollbar-color: rgb(17, 17, 17) rgb(5, 5, 5);
}

::-webkit-scrollbar {
  width: 6px;

  &:horizontal {
    height: 6px;
  }

  &-track,
  &-corner {
    background: #050505;
    border-radius: 10px;
  }

  &-thumb {
    background: #111;
    border-radius: 10px;

    &:hover {
      background: #222;
    }
  }
}

#layout-main {
  @apply py-20 px-10 text-center;
}
</style>
