<script setup lang="ts">
</script>

<template>
  <div>
    <Suspense>
      <div>Homepage</div>
      <template #fallback>
        <div class="opacity-50 italic">
          <span class="animate-pulse">Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>


<style lang="less" scoped>
</style>
