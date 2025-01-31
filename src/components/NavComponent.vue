<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routes } from '@data/routes'
</script>

<template>
  <nav>
    <RouterLink v-for="route in routes" :key="route.path" :to="route.path">
      {{ route.name }}
    </RouterLink>
  </nav>
</template>
