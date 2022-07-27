<script setup lang="ts">
import { githubIcon, twitterIcon } from '~~/assets/icons';

const pageLinks = [
  { text: 'About', link: '/about' },
  { text: 'Work', link: '/work' },
  { text: 'Contact', link: '/contact' },
];

const socialLinks = [
  { text: 'Twitter', icon: twitterIcon, link: 'https://twitter.com/ijk_ml' },
  { text: 'GitHub', icon: githubIcon, link: 'https://github.com/ijkml' },
];
</script>

<template>
  <header>
    <NuxtLink class="the-logo" to="/" tabindex="0">
      <TheLogo header />
    </NuxtLink>

    <nav>
      <div>
        <NuxtLink
          v-for="pl of pageLinks"
          :key="pl.text"
          class="page-links"
          :title="pl.text"
          :to="pl.link"
          tabindex="0"
          exact-active-class="pl-active"
        >
          {{ pl.text }}
        </NuxtLink>
        <NuxtLink
          v-for="sl in socialLinks"
          :key="sl.text"
          class="social-links"
          :title="sl.text"
          :href="sl.link"
          tabindex="0"
          target="_blank"
        >
          <Icon :label="sl.text" v-bind="sl.icon" size="22px" />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="less">
header {
}

nav {
  @apply py-8 px-4 sm:(px-8) w-full flex justify-end;

  > div {
    // @apply space-x-3 ml-2 inline-flex items-center sm:(space-x-5 mx-4);
    @apply inline-grid gap-2.5 grid-flow-col items-center sm:(gap-5 mx-4);
  }

  .page-links {
    @apply transition-colors outline-none leading-none
      duration-350 relative px-1 tracking-wider inline-flex;

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

    &.pl-active,
    &:hover,
    &:focus-visible {
      @apply text-pri;

      &::after {
        color: #fff;
        text-shadow: 8px 0 #fff, -8px 0 #fff;
      }
    }
  }

  .social-links {
    @apply inline-flex outline-none hidden transition-colors
      sm:(inline-flex);

    &:hover,
    &:focus-visible {
      @apply text-pri;
    }
  }
}

.the-logo {
  @apply absolute md:(fixed) left-0 top-0 z-3
    outline-none my-6 mx-3 sm:(m-6);
}
</style>