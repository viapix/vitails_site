<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="px-[15%] bg-linear-to-t from-zinc-800 to-gray-700">
    <div class="bg-zinc-900 h-full">
      <RouterView />
    </div>
  </main>
</template>
