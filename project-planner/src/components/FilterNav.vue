<template>
    <nav class="filter">
        <button @click="updateFilter('all')" :class="{ active : current === 'all'}">All</button>
        <button @click="updateFilter('completed')" :class="{ active : current === 'completed'}">Completed</button>
        <button @click="updateFilter('inprogress')" :class="{ active: current === 'inprogress'}">In-progress</button>
    </nav>
</template>

<script>
export default {
    props: ['current'],
    methods: {
        updateFilter(by) {
           this.$emit('filterChange', by) 
        }
    }
}
</script>

<style>
.filter button.active {
    color: rgb(139, 95, 38);
}
</style>