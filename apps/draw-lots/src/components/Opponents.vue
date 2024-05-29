<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div>
    <div>主1: {{ data.h1 }}</div>
    <div>主2</div>
    <div>主3</div>
    <div>主4</div>
    <div>主1</div>
    <div>主1</div>
    <div>主1</div>
    <div>主1</div>
  </div>
</template>
