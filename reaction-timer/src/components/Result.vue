<template>
    <p> My Reaction time is : {{ score }} ms</p>
    {{ rank }}
</template>

<script>
  export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },

    mounted() {
        if(this.score < 250) {
            this.rank = 'Your are Awesome at it'
        } else if(this.score < 500) {
            this.rank = 'Ohh, Very Goog ninja '
        } else {
            this.rank = 'Good Buddy'
        }
    }
  }
</script>