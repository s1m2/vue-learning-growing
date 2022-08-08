<script setup>
import { ref, computed } from "vue";

const firstName = ref("Alex");
const lastName = ref("Mitchell");

const fullName = computed({
  //getter
  get() {
    return `${firstName.value} ${lastName.value}`;
  },

  //setter
  set(updatedName) {
    [firstName.value, lastName.value] = updatedName.split(" ");
  },
});

function changeName() {
  fullName.value = "Vladimir Routin";
}
</script>

<template>
  <div class="about">
    <h1>Welcome back: {{ fullName }}</h1>
    <button @click="changeName">Change Name</button>
  </div>
</template>
