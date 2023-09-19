<template>
  <div class="w-[800px] m-auto">
    <pre> {{ meal }}</pre>
    <h1 class="text-5xl font-bold mb-4"> {{ meal.strMeal }}</h1>
    <img :src="meal?.strMealThumb" :alt="meal?.strMeal" />
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div>
        Category: {{ meal.strCategory }}
      </div>
      <div>
        Area: {{ meal.strArea }}
      </div>
      <div>
        Tags: {{ meal.strTags }}
      </div>
    </div>

    <div class="mt-4">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div class="mt-4">
        <YoutubeButton :href="meal?.strYoutube">  </YoutubeButton>

        <a href="meal.strSource" target="_blank" 
           class="px-2 p-2 border-purple-600 border rounded hover:text-white hover:bg-purple-600 ">
               View Original Source 
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>

import axiosClient from '../axiosClient';
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import YoutubeButton from '../components/YoutubeButton.vue';

const router = useRoute()
const meal = ref({})

onMounted(() => {
  axiosClient.get(`lookup.php?i=${router?.params?.id}`).then(({ data }) => {
    meal.value = data?.meals[0] || {}
  })
})
</script>