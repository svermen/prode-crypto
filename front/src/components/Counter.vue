<template>
  <div class="test">Counter {{ $count }}</div>
  <button @click="incrementCounter">+1</button>
</template>
<script setup>
  import { ref } from "vue"
  
  import {count} from '../stores/count'
  import {useStore} from '@nanostores/vue'
  const $count = useStore(count)

  const incrementCounter = () => {
    count.set($count.value +1) 
  }
</script>
