<script setup lang="ts">
import NavComponent from '@components/NavComponent.vue'
import HeaderComponent from '@components/HeaderComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <HeaderComponent>
      <NavComponent />
    </HeaderComponent>
  </header>

  <main>
    <RouterView />
  </main>
</template>
