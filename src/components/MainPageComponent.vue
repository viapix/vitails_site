<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="px-[15%] bg-linear-to-t from-zinc-800 to-gray-700">
    <div>
      <div class="border-2">
        <RouterView />
      </div>
    </div>
  </main>
</template>
