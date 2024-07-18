<script setup>
import { ref } from 'vue'
import List from '@/components/List.vue'
import listItems from '@/data/listItems.js'

const items = ref([])

setTimeout(() => {
  items.value = listItems
}, 100)
</script>

<template>
  <div>
    <List :items="items" />
  </div>
</template>

<style scoped></style>
