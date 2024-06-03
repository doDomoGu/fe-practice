<script setup>
import TeamItem from './components/TeamItem.vue'
// import { generateTeams, drawOneLot, drawOneLot2 } from './func.js'

import { generateTeams, drawLots2 } from './func2.js'

console.time('drawLots')

const teams = generateTeams()

drawLots2(teams)

console.timeEnd('drawLots')
</script>
<template>
  <div class="w-full h-full overflow-auto">
    <div class="flex flex-wrap">
      <div
        v-for="team in teams"
        :key="team.id"
        class="w-[400px] h-auto m-2 border"
      >
        <TeamItem :team="team" />
      </div>
    </div>
  </div>
</template>
