<script setup>
import { defineAsyncComponent, ref } from "vue";
// import LoginComponent from "@/components/LoginComponent.vue";

const LoginPopup = defineAsyncComponent(() =>
  import("./../components/LoginComponent.vue")
);

const showPopup = ref(false);
</script>

<template>
  <main>
    <h1>Async Components</h1>

    <!-- <LoginComponent v-if="showPopup" /> -->

    <LoginPopup v-if="showPopup" />
    <br />
    <button @click="() => (showPopup = true)">Show Popup</button>
  </main>
</template>

<style scoped></style>
