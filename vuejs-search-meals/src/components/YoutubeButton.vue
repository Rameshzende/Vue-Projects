<template>
    <a :href="href" target="_blank"
        class="px-2 p-2 border-red-600 border rounded hover:text-white hover:bg-red-600 ">YouTube</a>

    <slot></slot>
</template>

<script setup>
const props = defineProps({
    href: String
})
</script>