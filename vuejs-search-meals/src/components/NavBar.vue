<template>
 <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
      <router-link :to="{ name: 'Home'}" class="inline-flex h-full px-5 items-center">
        Home
      </router-link>
        <div class="flex items-center gap-1">
          <router-link :to="{ name: 'byName'}" class="hover:bg-purple-200 px-2 h-full inline-flex items-center">
            Search By Meals
        </router-link >
        <router-link :to="{ name: 'byLatter'}" class="hover:bg-purple-200 px-2 h-full inline-flex items-center">
            Meals By Latter
        </router-link>
        <router-link :to="{ name: 'byIngredient'}" class="hover:bg-purple-200 px-2 h-full inline-flex items-center">
           Meals By Ingredients 
        </router-link>
        </div>
    </header>
</template>

<script>
</script>