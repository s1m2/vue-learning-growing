<script setup>
import { useLocalStorage } from "@/composables/localStorage.js";

const { setItem } = useLocalStorage("key", "value");
</script>

<template>
  <main>
    <h1>Composables</h1>

    <button @click="setItem">Set Item To Local Storage</button>
  </main>
</template>

<style scoped></style>
