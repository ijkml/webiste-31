<script setup lang="ts">
</script>

<template>
  <div class="root">
    <h1>Hello there,</h1>
    <p>I'm Moses Laurence, and I'm a developer.</p>
    <p>
      I am a self-taught front-end developer focused on crafting modern and
      accessible web applications.
    </p>
  </div>
</template>


<style lang="less" scoped>
.root {
  @apply max-w-prose;

  margin: max(58vh, 160px) auto 80px;
}

h1 {
  @apply text-h2 font-semibold;

  // font-variant: small-caps;

  & + p {
    @apply font-medium text-h5 my-4;
  }
}

p {
  @apply text-lg leading-relaxed;
}
</style>
