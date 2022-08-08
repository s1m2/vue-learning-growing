<script setup>
import { ref } from "vue";

const showNotification = ref(false);
</script>

<template>
  <main>
    <transition
      enter-active-class="animated fadeIn zoomIn"
      leave-active-class="animated fadeOut zoomOut"
    >
      <p v-if="showNotification">
        This is a notification message....mmhhh....kinda
      </p>
    </transition>
    <br />
    <h1>Transitions with third party lib</h1>
    <br />
    <button @click="() => (showNotification = !showNotification)">
      Toggle notification
    </button>
  </main>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
