<template>
  <div class="flex p-8 flex-col">
      <input  v-model="keyword" 
              @change="searchMeals" 
              type="text" 
              class="rounded border-2 border-gray-200 w-full" 
              placeholder="Search Meals" 
              />
   </div>

   <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealItem v-for="meal of meals?.meals" :key="meal?.idMeal" :meal="meal"/>
   </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store'
import { useRoute } from 'vue-router';
import YoutubeButton from '../components/YoutubeButton.vue'
import MealItem from '../components/MealItem.vue';
const keyword = ref('')

const router = useRoute()
const meals = computed(() => store?.state?.searchedMeals)

function searchMeals() {
   store.dispatch('searchMealsList', keyword?.value)
}

onMounted(() => {
   keyword.value = router.params.name
   if(keyword?.value) {
      searchMeals()
   }
})

</script>