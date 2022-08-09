<script setup>
import { ref } from "vue";

const capitals = ref([
  "Abuja",
  "Brazzaville",
  "Conakry",
  "Libreville",
  "Maseru",
  "Ouagadougou",
]);

function removeCapital(capital) {
  const index = capitals.value.indexOf(capital);
  if (index) capitals.value.splice(index, 1);
}
</script>

<template>
  <main>
    <h1>Transition Group</h1>
    <br />

    <TransitionGroup tag="ul" name="list">
      <li v-for="capital in capitals" :key="capital">
        <div>{{ capital }}</div>
        <button @click="removeCapital(capital)">X</button>
      </li>
    </TransitionGroup>
  </main>
</template>

<style scoped>
button:hover {
  cursor: pointer;
}

li {
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 20px;
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
