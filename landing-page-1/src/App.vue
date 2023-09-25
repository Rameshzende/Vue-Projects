<template>
   <header>
      <Header />
  </header>
  <RouterView />
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue'
</script>

<style scoped>
</style>


