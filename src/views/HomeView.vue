<script setup>
import { ref } from "vue";

const showModal = ref(false);
</script>

<template>
  <main>
    <h1>Teleport</h1>
    <br />

    <button @click="() => (showModal = true)">Open Modal</button>

    <Teleport to="body">
      <div class="modal" v-if="showModal">
        <p>Look at me. I'm a modal</p>
        <button @click="() => (showModal = false)">Hide Modal</button>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
main {
  position: relative;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: #696969;
  background-color: hsl(0, 100%, 100%);
}
</style>
