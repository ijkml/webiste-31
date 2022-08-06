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
  <TheFooter />
</template>

<style lang="less">
html,
body,
#__nuxt {
  @apply outline-none m-0 p-0;
  color-scheme: dark;
  color: hsl(0, 0%, 78%);
  font-family: 'Exo', ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
}

html {
  overflow-y: scroll;
  background: @blk-1;
}

* {
  scrollbar-color: rgb(17, 17, 17) rgb(5, 5, 5);
}

::-webkit-scrollbar {
  max-width: 6px;

  &:horizontal {
    max-height: 6px;
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
  padding: 5vh 10vw;
}

#__nuxt {
  background: url('@img/bg-001.svg') bottom / cover no-repeat fixed;
}
</style>
