<script setup>
import Opponents from './Opponents.vue'

const props = defineProps({
  team: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div>
    <div :style="{ background: `#${team.uuid}` }">
      {{ team.name }}
    </div>
    <Opponents :data="team.opponents" :rest="team.restOppoLots" />
  </div>
</template>
