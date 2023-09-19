<template>
   <div class="flex p-8 flex-col">
      <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search Meals" />
      <div class="flex gap-1 justify-center mt-2">
         <router-link :to="{ name: 'byLetter', params: { latter: letter } }" v-for="letter in letters" :key="letter">
            {{ letter }}
         </router-link>
      </div>
   </div>
   
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWZYX'.split('')


onMounted(async () => {
   const res = await axiosClient.get('list.php?c=list')
   ingredients.value = res?.data
})

</script>

<style scoped></style>