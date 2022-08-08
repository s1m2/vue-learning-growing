<script setup>
import { ref } from "vue";
import ChildComponent from "@/components/ChildComponent.vue";

const notificationMessage = ref("");

function notify() {
  notificationMessage.value = "You have been notified my good man";
}
</script>

<template>
  <main>
    <h1>Events</h1>
    <br />

    <h2>{{ notificationMessage }}</h2>

    <ChildComponent @notify="notify" />
  </main>
</template>

<style scoped></style>
