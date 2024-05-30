<script setup>
import TeamItem from './components/TeamItem.vue'
import { generateTeams, drawOneLot } from './func.js'

const teams = generateTeams()

drawOneLot(teams)

console.log(teams)
</script>
<template>
  <div>
    <div class="flex flex-wrap">
      <div v-for="team in teams" :key="team.id" class="w-[420px] h-auto m-2 border">
        <TeamItem :team="team" />
      </div>
    </div>
  </div>
</template>
