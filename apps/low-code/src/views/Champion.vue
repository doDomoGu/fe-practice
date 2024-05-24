<script setup>
// import { computed } from 'vue'
const teams = []
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 9; j++) {
    teams.push({
      name: `Team ${(i - 1) * 9 + j}`,
      level: i
    })
  }
}
const drawLotsResult = new Map()
teams.forEach((team) => {
  drawLotsResult.set(team, { home: [], away: [] })
})

console.log(drawLotsResult)

const drawLotsByTeam = (team) => {
  for (let i = 1; i <= 4; i++) {
    drawOneLot(team, teams.slice((i - 1) * 9, i * 9))
  }
}

const drawOneLot = (team, opponents) => {
  const drawOne = (team, opponents, isHome) => {
    // console.log(team, opponents, isHome)
    if (opponents.length === 0) return [false, []]

    const selfKey = isHome ? 'home' : 'away'
    const oppoKey = isHome ? 'away' : 'home'

    const opponent = opponents.splice(Math.floor(Math.random() * opponents.length), 1)[0]

    // 判断是否可以选到该队
    if (opponent.name !== team.name) {
      const oppoLevel = opponent.level
      const teamLevel = team.level

      const opponentHomeDrawed = drawLotsResult.get(team).home[oppoLevel - 1]
      const opponentAwayDrawed = drawLotsResult.get(team).away[oppoLevel - 1]
      const selfHomeDrawed = drawLotsResult.get(opponent).home[teamLevel - 1]
      const selfAwayDrawed = drawLotsResult.get(opponent).away[teamLevel - 1]
      if (
        [opponentHomeDrawed, opponentAwayDrawed].findIndex((v) => v && v.name == opponent.name) ==
          -1 &&
        [selfHomeDrawed, selfAwayDrawed].findIndex((v) => v && v.name == team.name) == -1
      ) {
        if (
          (isHome && !opponentHomeDrawed && !selfAwayDrawed) ||
          (!isHome && !opponentAwayDrawed && !selfHomeDrawed)
        ) {
          const selfList = drawLotsResult.get(team)[selfKey]
          selfList[oppoLevel - 1] = opponent

          drawLotsResult.set(team, {
            ...drawLotsResult.get(team),
            [selfKey]: selfList
          })

          const oppoList = drawLotsResult.get(opponent)[oppoKey]
          oppoList[teamLevel - 1] = team

          drawLotsResult.set(opponent, {
            ...drawLotsResult.get(opponent),
            [oppoKey]: oppoList
          })

          return [true, opponents]
        }
      }
    }

    return drawOne(team, opponents, isHome)
  }
  // console.log([...opponents])
  ;[, opponents] = drawOne(team, opponents, true)
  // console.log([...opponents])
  drawOne(team, opponents, false)
}
let gamesCount = 0
let maxTimes = 50
while (gamesCount < 36 * 8 && maxTimes > 0) {
  teams.forEach((team) => {
    // console.log({ teams })
    drawLotsByTeam(team)
  })
  maxTimes--
  gamesCount = (() => {
    let gamesCount = 0
    for (let [, opponents] of drawLotsResult.entries()) {
      gamesCount += opponents.home.length + opponents.away.length
    }
    console.log({ gamesCount })
    return gamesCount
  })()
}
</script>

<template>
  <div>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="[team, opponents] of drawLotsResult.entries()" :key="team" class="border p-2">
        <div class="flex">
          <div class="flex-none mr-20">{{ team.name }}</div>
          <div class="flex-none mr-2">{{ team.level }}</div>
        </div>
        <div class="flex">
          <div class="flex-none mr-4">HOME({{ opponents.home.length }}):</div>
          <div class="mr-2" v-for="opponent in opponents.home" :key="opponent">
            {{ opponent?.name }}
          </div>
        </div>
        <div class="flex">
          <div class="flex-none mr-4">AWAY({{ opponents.away.length }}):</div>
          <div class="mr-2" v-for="opponent in opponents.away" :key="opponent">
            {{ opponent?.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
