<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  console.log("This component has been mounted");
});

onUnmounted(() => {
  console.log("This component has been unmounted");
});
</script>

<template>
  <main>
    <h1>This is an awesome place to be</h1>
  </main>
</template>
