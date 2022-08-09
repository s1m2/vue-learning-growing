<script setup>
import FormComponent from "@/components/FormComponent.vue";
import RandomComponent from "@/components/RandomComponent.vue";

import { shallowRef } from "vue";
const current = shallowRef(FormComponent);
</script>

<template>
  <main>
    <h1>Keep Alive</h1>
    <br />

    <div>
      <label
        ><input type="radio" v-model="current" :value="FormComponent" /> Form
        component</label
      >
      <label
        ><input type="radio" v-model="current" :value="RandomComponent" />
        Random component</label
      >
    </div>

    <KeepAlive>
      <component :is="current" />
    </KeepAlive>
  </main>
</template>

<style scoped>
div {
  margin-bottom: 20px;
}

label {
  margin-right: 20px;
}

label:hover {
  cursor: pointer;
}
</style>
