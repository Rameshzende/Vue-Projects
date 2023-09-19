<template>
       <div class="flex gap-1 justify-center mt-2">
          <router-link :to="{ name: 'byLetter', params: { latter: letter } }" v-for="letter in letters" :key="letter">
             {{ letter }}
          </router-link>
       </div>
 </template>
 
 <script setup>
import { useRoute } from 'vue-router';
import { onMounted, computed} from 'vue'
import store from '../store';
 
const router = useRoute()

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWZYX'.split('')
const meals = computed(() => store.state.mealsByLatter)
 
 onMounted(() => {
    console.log(router.params)
    store.dispatch('searchMealsByLatter', router?.params?.latter)
 })

 </script>
 
 <style scoped></style>