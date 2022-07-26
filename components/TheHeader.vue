<script setup lang="ts">
const pageLinks = [
  { text: 'About', link: '/about' },
  { text: 'Work', link: '/work' },
  { text: 'Contact', link: '/contact' },
];
</script>

<template>
  <header>
    <NuxtLink class="the-logo" to="/" tabindex="0">
      <TheLogo />
    </NuxtLink>

    <nav>
      <div>
        <NuxtLink
          v-for="pl of pageLinks"
          :key="pl.text"
          class="page-links"
          :to="pl.link"
          tabindex="0"
        >
          {{ pl.text }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="less">
header {
  // @apply;
}

nav {
  @apply p-8 w-full flex justify-end;

  > div {
    @apply space-x-8 mx-4;
  }

  .page-links {
    @apply transition-colors outline-none
      duration-350 relative px-1 tracking-wider;

    // &::before {
    //   transform: scale3d(0, 1, 1);
    //   transform-origin: 0% 50%;
    //   transition: transform 450ms, background-color 350ms;
    //   transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);

    //   @apply opacity-25 bg-current h-1/2 w-full left-0
    //     bottom-0 -z-1 absolute content-[''];
    // }
    // transform: scale3d(1, 1, 1);

    &::after {
      text-shadow: 0 0 transparent;
      transition: text-shadow 300ms, color 300ms;
      transform: translateX(-50%);

      @apply pointer-events-none absolute top-full
        left-1/2 text-transparent content-['•']
          text-sm leading-3 opacity-80;
    }

    &:hover,
    &:focus-visible {
      @apply text-sec;

      &::after {
        color: #fff;
        text-shadow: 8px 0 #fff, -8px 0 #fff;
      }
    }
  }
}

.the-logo {
  @apply fixed left-0 top-0 z-3 outline-none m-6;

  svg {
    @apply max-h-10 w-auto select-none;
  }

  :deep(path) {
    @apply fill-zinc-300 transition-opacity;
  }

  &:hover,
  &:focus-visible {
    :deep(path) {
      @apply opacity-60;
    }
  }
}
</style>