<script setup>
import { opponentTypeList } from '../func.js'
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  rest: Object
})
</script>
<template>
  <div>
    <div v-if="opponentTypeList.includes('h1')">
      主1: {{ data.h1?.name }} ({{ rest.h1 }})
    </div>
    <div v-if="opponentTypeList.includes('a1')">
      客1: {{ data.a1?.name }} ({{ rest.a1 }})
    </div>
    <div v-if="opponentTypeList.includes('h2')">
      主2: {{ data.h2?.name }} ({{ rest.h2 }})
    </div>
    <div v-if="opponentTypeList.includes('a2')">
      客2: {{ data.a2?.name }} ({{ rest.a2 }})
    </div>
    <div v-if="opponentTypeList.includes('h3')">
      主3: {{ data.h3?.name }} ({{ rest.h3 }})
    </div>
    <div v-if="opponentTypeList.includes('a3')">
      客3: {{ data.a3?.name }} ({{ rest.a3 }})
    </div>
    <div v-if="opponentTypeList.includes('h4')">
      主4: {{ data.h4?.name }} ({{ rest.h4 }})
    </div>
    <div v-if="opponentTypeList.includes('a4')">
      客4: {{ data.a4?.name }} ({{ rest.a4 }})
    </div>
  </div>
</template>
