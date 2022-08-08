<script setup>
import { inject } from "vue";
const message = inject("message");
</script>

<template>
  <h3>I am the Child</h3>

  <p>{{ message }}</p>
</template>
