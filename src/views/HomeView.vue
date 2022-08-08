<script setup>
import { reactive } from "vue";

const state = reactive({ count: 0 });

function incrementCount() {
  state.count++;
}
</script>

<template>
  <main>
    <h1>The current count is: {{ state.count }}</h1>
    <button @click="incrementCount">Increment Count</button>
  </main>
</template>
