<template>
<div class="bg-white shadow rounded">
         <router-link :to="{name: 'mealDetails', params: {id: meal?.idMeal}}">
            <img :src="meal?.strMealThumb" class="rounded-t-md h-48 w-full object-cover"/>
         </router-link>
         <h3 class="p-3 font-semibold"> {{ meal?.strMeal }}</h3>
         <div class="p-3 flex justify-between items-center">
            <YoutubeButton :href="meal.strYouTube"> YouTube2 </YoutubeButton>
            <router-link to="/" class="px-2 p-2 border-purple-600 border rounded hover:text-white hover:bg-purple-600 ">
               View
            </router-link>
         </div>
      </div>
</template>

<script setup>

const { meal } = defineProps({
    meal : Object
})

console.log(meal)
</script>