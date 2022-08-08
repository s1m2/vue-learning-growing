<script setup>
import { ref, watchEffect } from "vue";

const count = ref(0);
const joke = ref("");

watchEffect(async () => {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  joke.value = (await res.json()).joke;
});

function requestJoke() {
  count.value++;
}
</script>

<template>
  <main>
    <h1>Watch Effect</h1>
    <p>Click the button to request a dad joke</p>
    <button @click="requestJoke">Request Joke</button>

    <blockquote>
      <p>{{ joke }}</p>
    </blockquote>
  </main>
</template>

<style scoped>
p {
  margin: 20px 0;
}
blockquote {
  font-size: 2em;
}

button {
  border: none;
  margin: 0;
  padding: 1.2em;
  width: auto;
  overflow: visible;
  border-radius: 3px;

  background: white;
}

button:hover {
  cursor: pointer;
}
</style>
