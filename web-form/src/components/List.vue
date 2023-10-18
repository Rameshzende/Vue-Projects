<template>
    <h3>Filter using the Composition API and Computed</h3>

    <input type="text" v-model="filteredValue">
    {{ posts }}
    <div v-if="posts">
      {{ posts }}
    </div>

    <div v-else>Loading.....</div>

    <div class="list" v-for="list in ListDetails" :key="list" >
        <p> {{ list }}</p>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import getPosts from '../composiable/getPosts'

export default {
    setup() {
        const lists = ref(['list', 'name', 'gender', 'likes', 'comment']) 
        const filteredValue = ref('list')
        const { posts, load, error} = getPosts()

        let ListDetails = computed(() => {
            return lists.value.filter(list => list.includes(filteredValue.value))
        })

        load()

        return { lists, filteredValue, ListDetails, posts} 
    }

}
</script>


<style>
  input {
    padding: '10px';
    width: 240px;
    margin: 5px auto;
  }
</style>

