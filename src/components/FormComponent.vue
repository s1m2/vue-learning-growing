<script setup>
import { ref } from "vue";
const name = ref("");
</script>

<template>
  <label> Enter your name </label>
  <input type="text" name="name" id="name" v-model="name" />
</template>
