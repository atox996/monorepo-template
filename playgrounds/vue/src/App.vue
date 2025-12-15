<template>
  <div>
    <img src="/logo.svg" alt="Vue logo" />
    <h1>Hello, Web App!</h1>
    <button @click="add">Add</button>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const count = ref(0);
const add = () => {
  count.value++;
};
</script>

<style scoped>
img {
  width: 100px;
}
</style>
