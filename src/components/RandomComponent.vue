<script setup>
import { ref } from "vue";
const counter = ref(0);

function incrementCounter() {
  counter.value++;
}
</script>

<template>
  <p>This random component has a counter</p>
  <br />
  <p>{{ counter }}</p>
  <br />
  <button @click="incrementCounter">Click me</button>
</template>
