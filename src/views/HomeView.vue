<script setup>
import ParentComponent from "@/components/ParentComponent.vue";
import { provide } from "vue";

provide("message", "It's peanut butter jelly time");
</script>

<template>
  <main>
    <h1>Provide &amp; Inject</h1>
    <p>I want to pass data to my grand child</p>

    <ParentComponent />
  </main>
</template>

<style scoped></style>
