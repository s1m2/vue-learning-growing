<script setup>
import { ref } from "vue";

const count = ref(0);

function incrementCount() {
  count.value++;
}
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="incrementCount">The new count is {{ count }}</button>
  </div>
</template>
