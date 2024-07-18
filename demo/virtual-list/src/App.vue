<script setup>
import { ref } from 'vue'
import List from '@/components/list/index.vue'
import listData from './listData.js'


const data = ref([])

setTimeout(()=>{
  data.value = listData
},500)
</script>

<template>
  <div>
    <List :data="data" />
  </div>
</template>

<style scoped>
</style>
