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
        <iframe
          src="https://giphy.com/embed/JmPenP1svctdfDCEHi"
          width="480"
          height="480"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a
            href="https://giphy.com/gifs/rickandmorty-season-3-adult-swim-rick-and-morty-JmPenP1svctdfDCEHi"
            >via GIPHY</a
          >
        </p>
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
  padding: 10em;
}
</style>
