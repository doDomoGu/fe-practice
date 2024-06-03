<script setup>
import { levelCount } from '../func2'
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="m-2">
    <template v-for="item in levelCount" :key="item">
      <div :style="{ back2ground: `#${data[`h${item}`].uuid}` }">
        主1: {{ data[`h${item}`].name }}
      </div>
      <div :style="{ back2ground: `#${data[`a${item}`].uuid}` }">
        客1: {{ data[`a${item}`].name }}
      </div>
    </template>
  </div>
</template>
