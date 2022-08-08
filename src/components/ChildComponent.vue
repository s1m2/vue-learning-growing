<script setup>
const emit = defineEmits(["notify"]);

function buttonClick() {
  emit("notify");
}
</script>

<template>
  <main>
    <button @click="buttonClick">Notify Parent</button>
  </main>
</template>

<style scoped></style>
