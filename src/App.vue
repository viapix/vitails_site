<script setup lang="ts">
import HeaderComponent from '@components/HeaderComponent.vue'
import FooterComponent from '@components/FooterComponent.vue'
import MainPageComponent from '@components/MainPageComponent.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <HeaderComponent class="flex-none" />
    <MainPageComponent class="grow border-2" />
    <FooterComponent class="flex-none" />
  </div>
</template>
