<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="counter">
    <h1>{{ count }}</h1>
    <button @click="incrementCount">The new count is {{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },

  methods: {
    incrementCount() {
      this.count++;
    }
  }
};
</script>
