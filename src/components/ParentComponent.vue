<script setup>
import ChildComponent from "./ChildComponent.vue";
</script>

<template>
  <h2>I'm the parent component</h2>
  <p>I dont want props</p>
  <ChildComponent />
</template>

<style scoped>
h2 {
  margin-top: 30px;
}

p {
  margin-bottom: 30px;
}
</style>
