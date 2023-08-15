<template>
  <div class="test">Counter {{ counter }}</div>
  <button @click="incrementCounter">+1</button>
</template>
<script setup>
  import { ref } from "vue"
  const counter = ref(0)

  const incrementCounter = () => {
    counter.value += 1
  }
</script>
