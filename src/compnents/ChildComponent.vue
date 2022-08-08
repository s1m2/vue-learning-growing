<script setup>
// import { computed } from "vue";

defineProps({ dataPassed: String });

// const props = defineProps(["initialValue"]);

// const transformedValue = computed(() => props.initialValue * 2);
</script>

<template>
  <h2>I am a child</h2>
  <h3>{{ dataPassed }}</h3>
</template>
