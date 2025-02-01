<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routes } from '@data/routes'
</script>

<template>
  <nav>
    <RouterLink
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      class="border-1 p-0.5 border-blue-400"
    >
      {{ route.name }}
    </RouterLink>
  </nav>
</template>
