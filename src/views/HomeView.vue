<script setup>
import ChildComponent from "@/compnents/ChildComponent.vue";
</script>

<template>
  <main>
    <h1>Props</h1>
    <p>This is a parent component</p>
    <br />
    <ChildComponent dataPassed="This is data passed from the parent" />
  </main>
</template>

<style scoped></style>
