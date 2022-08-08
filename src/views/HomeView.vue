<script setup>
import { ref, computed } from "vue";

const name = ref("Timmy Turner");
const upperCased = computed(() => name.value.toUpperCase());
</script>

<template>
  <main>
    <h1>Computed properties</h1>
    <h3>Welcome back: {{ upperCased }}</h3>
  </main>
</template>
