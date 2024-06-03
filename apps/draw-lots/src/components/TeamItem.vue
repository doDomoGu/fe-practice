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
      {{ team.name }} | {{ team.level }} | {{ team.ord }}
    </div>
    <Opponents :data="team.opponents" />
  </div>
</template>
