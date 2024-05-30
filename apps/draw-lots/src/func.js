import { v4 as uuidv4 } from 'uuid'

const initRestOppoLots = (start, cur) => {
  const ret = []
  for (let i = 1; i <= 9; i++) {
    if (start + i === cur) continue
    ret.push(start + i)
  }
  return ret
}

const generateTeams = () => {
  const teams = []
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 9; j++) {
      const uuid = uuidv4().slice(0, 6)
      const ord = (i - 1) * 9 + j
      teams.push({
        ord,
        uuid,
        name: `Team - ${uuid}`,
        level: i,
        opponents: {
          h1: null,
          a1: null,
          h2: null,
          a2: null,
          h3: null,
          a3: null,
          h4: null,
          a4: null
        },
        restOppoLots: {
          h1: initRestOppoLots(0, ord),
          a1: initRestOppoLots(0, ord),
          h2: initRestOppoLots(9, ord),
          a2: initRestOppoLots(9, ord),
          h3: initRestOppoLots(18, ord),
          a3: initRestOppoLots(18, ord),
          h4: initRestOppoLots(27, ord),
          a4: initRestOppoLots(27, ord)
        }
      })
    }
  }
  return teams
}

const drawOneLot = (teams) => {
  const rOrd = Math.ceil(Math.random() * 36)

  const oriTeam = teams[rOrd]

  let success = false

  for (let v of ['h1', 'a1', 'h2', 'a2', 'h3', 'a3', 'h4', 'a4']) {
    if (oriTeam.opponents[v] == null) {
      const restLen = oriTeam.restOppoLots[v].length
      const restRandomIdx = Math.ceil(Math.random() * restLen)
      console.log('restRandomIdx', restRandomIdx, restLen, oriTeam.restOppoLots[v])
      const targetTeamOrd = oriTeam.restOppoLots[v][restRandomIdx - 1]

      const targetTeam = teams[targetTeamOrd - 1]

      const targetV = (v[0] == 'h' ? 'a' : 'h') + oriTeam.level
      console.log('targetTeam', v, targetV, targetTeamOrd, targetTeam)
      console.log(
        'indexOf',
        targetTeam.restOppoLots[targetV],
        oriTeam.ord,
        targetTeam.restOppoLots[targetV].indexOf(oriTeam.ord),
        targetTeam.opponents[targetV] == null &&
          targetTeam.restOppoLots[targetV].indexOf(oriTeam.ord) > -1
      )
      if (
        targetTeam.opponents[targetV] == null &&
        targetTeam.restOppoLots[targetV].indexOf(oriTeam.ord) > -1
      ) {
        // oriTeam.restOppoLots[v].splice(restRandomIdx, 1)
        oriTeam.opponents[v] = {
          ord: targetTeam.ord,
          uuid: targetTeam.uuid,
          name: targetTeam.name,
          level: targetTeam.level
        }

        // targetTeam.restOppoLots[targetV].splice(
        //   targetTeam.restOppoLots[targetV].indexOf(oriTeam.ord),
        //   1
        // )
        targetTeam.opponents[targetV] = {
          ord: oriTeam.ord,
          uuid: oriTeam.uuid,
          name: oriTeam.name,
          level: oriTeam.level
        }
        // console.log('teams[i].restOppoLots[v]', JSON.parse(teams[i].restOppoLots[v]))
        for (let i = 0; i < 36; i++) {
          teams[i].restOppoLots[v] = teams[i].restOppoLots[v].filter((v) => {
            return v !== targetTeam.ord
          })
          teams[i].restOppoLots[targetV] = teams[i].restOppoLots[targetV].filter((v) => {
            return v !== oriTeam.ord
          })
        }
        console.log('success', oriTeam.ord, targetTeam.ord)
        success = true
        break
      }
    }
  }

  return success
}

export { generateTeams, drawOneLot }
