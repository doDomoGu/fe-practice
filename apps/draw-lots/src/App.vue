<script setup>
import TeamItem from './components/TeamItem.vue'
import generateTeams from './generateTeams'

const teams = generateTeams()
console.log(teams)
</script>
<template>
  <div>
    <div class="flex flex-wrap">
      <div
        v-for="team in teams"
        :key="team.id"
        class="w-[300px] h-[200px] m-2 border"
      >
        <TeamItem :team="team" />
      </div>
    </div>
  </div>
</template>
