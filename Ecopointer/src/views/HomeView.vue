<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="background">
    <RouterLink :to="{name: 'landing'}">A</RouterLink>
  </main>
</template>

<style scoped>
  .background{
    background-color:green;
  }
</style>
