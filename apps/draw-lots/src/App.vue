<script setup>
import TeamItem from './components/TeamItem.vue'
import { generateTeams, drawOneLot } from './func.js'

const teams = generateTeams()
console.log('==', teams, '==')

const matchTotal = (36 * 8) / 2 // 144

let matchCount = 0

const maxLoopTime = 2

let loopCount = 0

while (matchCount < matchTotal && loopCount < maxLoopTime) {
  loopCount++
  console.log('loopCount:', loopCount)
  matchCount += drawOneLot(teams)
  console.log('matchCount:', matchCount)
}

console.log(teams)
</script>
<template>
  <div class="w-full h-full overflow-auto">
    <div class="flex flex-wrap">
      <div
        v-for="team in teams"
        :key="team.id"
        class="w-[420px] h-auto m-2 border"
      >
        <TeamItem :team="team" />
      </div>
    </div>
  </div>
</template>
