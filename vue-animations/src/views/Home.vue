<template>
  <div class="home">
    <Toast v-if="showToast" />
    <Todos @badValue="triggerToast" />

    <transition>
      <div v-if="showDiv"> Hello, ninjas</div>
    </transition>
    <button @click="showDiv = !showDiv">Click</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import Toast from '../components/Toast.vue'
import Todos from '../components/Todos.vue'

export default {
  components: { Toast, Todos },
  setup() {
    const showToast = ref(false)
    const showDiv = ref(false)

    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => showToast.value = false, 3000)
    }

    return { showToast, triggerToast, showDiv }
  }
}
</script>

<style>

</style>