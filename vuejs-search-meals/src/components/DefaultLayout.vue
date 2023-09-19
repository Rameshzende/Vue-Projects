<template>
    <div class="bg-gray-200">
     <NavBar />
     <main> 
       <router-view />
     </main>
</div>
</template>

<script setup>
  import NavBar from '../components/NavBar.vue'
</script>