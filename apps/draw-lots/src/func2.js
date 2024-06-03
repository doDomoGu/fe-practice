import { v4 as uuidv4 } from 'uuid'
// 共分几个等级
const levelCount = 4
// 每一等级有几支球队
const eachLevelTeamCount = 9
// 共几支球队
const teamTotalCount = levelCount * eachLevelTeamCount

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function getOrdListByLvl(lvl) {
  let ordList = []

  for (
    let i = (lvl - 1) * eachLevelTeamCount;
    i < lvl * eachLevelTeamCount;
    i++
  ) {
    ordList.push(i)
  }

  return ordList
}

const generateTeams = () => {
  const teams = []
  for (let i = 0; i < levelCount; i++) {
    for (let j = 0; j < eachLevelTeamCount; j++) {
      const uuid = uuidv4().slice(0, 6)
      const ord = i * eachLevelTeamCount + j

      const tItem = {
        ord,
        uuid,
        name: `Team - ${uuid}`,
        level: i + 1,
        opponents: {}
      }

      for (let lvl = 1; lvl <= levelCount; lvl++) {
        tItem.opponents['h' + lvl] = null
        tItem.opponents['a' + lvl] = null
      }

      teams.push(tItem)
    }
  }
  return teams
}

const drawLots2 = (teams) => {
  let allTeamsOrd = []

  // 遍历等级
  for (let lvl = 1; lvl <= levelCount; lvl++) {
    allTeamsOrd[lvl] = shuffleArray(getOrdListByLvl(lvl))
  }

  for (let oriLvl = 1; oriLvl <= levelCount; oriLvl++) {
    for (let tarLvl = 1; tarLvl <= levelCount; tarLvl++) {
      for (let ord = 0; ord < eachLevelTeamCount; ord++) {
        let tarOrd = ord + 1
        if (tarOrd == eachLevelTeamCount) tarOrd = 0

        const oriTeam = teams[allTeamsOrd[oriLvl][ord]]

        const tarTeam = teams[allTeamsOrd[tarLvl][tarOrd]]

        drawOneLot(oriTeam, tarTeam, teams)
      }
    }
  }
}

const drawOneLot = (oriTeam, tarTeam, teams) => {
  const oriOppoType = 'h' + tarTeam.level
  const tarOppoType = 'a' + oriTeam.level

  oriTeam.opponents[oriOppoType] = {
    ord: tarTeam.ord,
    uuid: tarTeam.uuid,
    name: tarTeam.name,
    level: tarTeam.level
  }
  tarTeam.opponents[tarOppoType] = {
    ord: oriTeam.ord,
    uuid: oriTeam.uuid,
    name: oriTeam.name,
    level: oriTeam.level
  }

  return true
}

export { levelCount, generateTeams, drawLots2 }
