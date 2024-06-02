import { v4 as uuidv4 } from 'uuid'

const debugLevel = ''

const levelCount = 4

const opponentTypeList = ((levelCount) => {
  let list = []
  for (let i = 1; i <= levelCount; i++) {
    list.push('h' + i)
    list.push('a' + i)
  }
  return list
})(levelCount)

const eachLevelTeamCount = 9

const teamTotalCount = levelCount * eachLevelTeamCount

const initRestOppoLots = (start, cur) => {
  const ret = []
  for (let i = 0; i < eachLevelTeamCount; i++) {
    if (start + i === cur) continue
    ret.push(start + i)
  }
  return ret
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const generateTeams = () => {
  const teams = []
  for (let i = 0; i < levelCount; i++) {
    for (let j = 0; j < eachLevelTeamCount; j++) {
      const uuid = uuidv4().slice(0, 6)
      const ord = i * eachLevelTeamCount + j // ord 从0开始，35结束

      const tItem = {
        ord,
        uuid,
        name: `Team - ${uuid}`,
        level: i + 1,
        opponents: {},
        restOppoLots: {}
        // opponents: {
        //   h1: null,
        //   a1: null,
        //   h2: null,
        //   a2: null,
        //   h3: null,
        //   a3: null,
        //   h4: null,
        //   a4: null
        // },
        // restOppoLots: {
        //   h1: initRestOppoLots(0, ord),
        //   a1: initRestOppoLots(0, ord),
        //   h2: initRestOppoLots(1 * eachLevelTeamCount, ord),
        //   a2: initRestOppoLots(1 * eachLevelTeamCount, ord),
        //   h3: initRestOppoLots(2 * eachLevelTeamCount, ord),
        //   a3: initRestOppoLots(2 * eachLevelTeamCount, ord),
        //   h4: initRestOppoLots(3 * eachLevelTeamCount, ord),
        //   a4: initRestOppoLots(3 * eachLevelTeamCount, ord)
        // }
      }
      opponentTypeList.forEach((v) => {
        tItem.opponents[v] = null
        tItem.restOppoLots[v] = initRestOppoLots(
          (v[1] - 1) * eachLevelTeamCount,
          ord
        )
      })

      teams.push(tItem)
    }
  }
  return teams
}

function intersection(...arrays) {
  if (arrays.length === 0) return []

  let result = arrays.shift()

  while (arrays.length > 0) {
    result = result.filter((value) => arrays.shift().includes(value))
  }

  return result
}

function forceLotsWhenRest3(teams, type, level) {
  function getOppoObj(team) {
    return {
      ord: team.ord,
      uuid: team.uuid,
      name: team.name,
      level: team.level
    }
  }
  const restTeams = []
  for (
    let i = (level - 1) * eachLevelTeamCount;
    i < level * eachLevelTeamCount;
    i++
  ) {
    if (teams[i].opponents['h' + level] == null) {
      console.log('rest3 - h', teams[i])
      // restTeams.push(teams[i])
    }

    if (teams[i].opponents['a' + level] == null) {
      console.log('rest3 - a', teams[i])
      // restTeams.push(teams[i])
    }
  }

  // if (restTeams.length == 3) {
  //   // const targetType = (oriType[0] == 'h' ? 'a' : 'h') + level

  //   const team1 = restTeams[0]

  //   const team2 = restTeams[1]

  //   const team3 = restTeams[2]

  //   const team1H1OppoOrd = [2, 3][Math.floor(Math.random() * 2)]

  //   const hType = 'h' + level
  //   const aType = 'a' + level
  //   if (team1H1OppoOrd == 2) {
  //     team1.opponents[hType] = getOppoObj(team2)
  //     team1.opponents[aType] = getOppoObj(team3)

  //     team2.opponents[hType] = getOppoObj(team3)
  //     team2.opponents[aType] = getOppoObj(team1)

  //     team3.opponents[hType] = getOppoObj(team1)
  //     team3.opponents[aType] = getOppoObj(team2)
  //   } else {
  //     // if(team1H1OppoOrd == 3)

  //     team1.opponents[hType] = getOppoObj(team3)
  //     team1.opponents[aType] = getOppoObj(team2)

  //     team2.opponents[hType] = getOppoObj(team1)
  //     team2.opponents[aType] = getOppoObj(team3)

  //     team3.opponents[hType] = getOppoObj(team2)
  //     team3.opponents[aType] = getOppoObj(team1)
  //   }

  //   team1.restOppoLots[hType] = []
  //   team1.restOppoLots[aType] = []
  //   team2.restOppoLots[hType] = []
  //   team2.restOppoLots[aType] = []
  //   team3.restOppoLots[hType] = []
  //   team3.restOppoLots[aType] = []

  // }
}

const drawOneLot2 = (teams) => {
  console.log('drawOneLot2 ===== start =====')
  let successTime = 0

  let teamCount = 0
  let teamsOrd = []
  for (let i = 0; i < teamTotalCount; i++) {
    teamsOrd.push(i)
  }

  shuffleArray(teamsOrd)
  console.log('teamsOrd', teamsOrd)

  // 依次遍历8种需要对阵的对手的种类 (h1:主场对阵的level1球队, a1:客场对阵的level1球队...)
  for (let oriType of opponentTypeList) {
    for (let teamOrd of teamsOrd) {
      const oriTeam = teams[teamOrd]
      console.log('=====oriTeam=====', ++teamCount, oriTeam)
      const oriLevel = oriTeam.level

      console.log('oriType', oriType, 'isHas', oriTeam.opponents[oriType])
      // 如果该种类的已经找到对手，则跳过
      if (oriTeam.opponents[oriType] != null) continue

      const oppoListCopy = [...oriTeam.restOppoLots[oriType]]

      shuffleArray(oppoListCopy)

      const targetType = (oriType[0] == 'h' ? 'a' : 'h') + oriTeam.level

      console.log('oppoListCopy', oppoListCopy, targetType)

      for (let targetTeamOrd of oppoListCopy) {
        const targetTeam = teams[targetTeamOrd]
        console.log('targetTeam', targetTeam, 'targetTeamOrd', targetTeamOrd)
        const targetLevel = targetTeam.level
        // 对手对应的targetType类型的对手已经有了  就跳过
        if (targetTeam.opponents[targetType] != null) continue

        if (oriType == debugLevel) {
          console.warn(`oriType=${debugLevel}`, oriTeam)
        }
        oriTeam.restOppoLots[oriType] = []
        // oriTeam.restOppoLots[oriType].splice(restRandomIdx, 1)
        oriTeam.opponents[oriType] = {
          ord: targetTeam.ord,
          uuid: targetTeam.uuid,
          name: targetTeam.name,
          level: targetTeam.level
        }

        // targetTeam.restOppoLots[targetType].splice(
        //   targetTeam.restOppoLots[targetType].indexOf(oriTeam.ord),
        //   1
        // )
        if (targetType == debugLevel) {
          console.warn(`targetType=${debugLevel}`, targetTeam)
        }

        targetTeam.restOppoLots[targetType] = []
        targetTeam.opponents[targetType] = {
          ord: oriTeam.ord,
          uuid: oriTeam.uuid,
          name: oriTeam.name,
          level: oriTeam.level
        }
        // console.log('teams[i].restOppoLots[oriType]', JSON.parse(teams[i].restOppoLots[oriType]))

        // 同一level 补充 不能再抽到
        if (targetLevel == oriLevel) {
          oriTeam.restOppoLots[targetType] = oriTeam.restOppoLots[
            targetType
          ].filter((v) => v !== targetTeam.ord)

          targetTeam.restOppoLots[oriType] = targetTeam.restOppoLots[
            oriType
          ].filter((v) => v !== oriTeam.ord)
        }

        console.log('=== start 173 ====')
        // for (let i = 0; i < teamTotalCount; i++) {

        for (
          let i = (oriLevel - 1) * eachLevelTeamCount;
          i < oriLevel * eachLevelTeamCount;
          i++
        ) {
          // if (oriType == debugLevel) {
          //   console.warn(
          //     `teams[${i}].restOppoLots[${debugLevel}] - 1111`,
          //     `filter ${targetTeam.ord}`,
          //     [...teams[i].restOppoLots[oriType]]
          //   )
          // }
          teams[i].restOppoLots[oriType] = teams[i].restOppoLots[
            oriType
          ].filter((v) => v !== targetTeam.ord)

          // console.log('teams[i].restOppoLots[oriType]222', oriType, [
          //   ...teams[i].restOppoLots[oriType]
          // ])

          if (oriType == debugLevel) {
            console.warn(
              `teams[${i}].restOppoLots[${debugLevel}] - 2222`,
              `filter ${targetTeam.ord}`,
              [...teams[i].restOppoLots[oriType]]
            )
          }
        }
        // console.log('teams[i].restOppoLots[targetType]', targetType, [
        //   ...teams[i].restOppoLots[targetType]
        // ])
        for (
          let i = (targetLevel - 1) * eachLevelTeamCount;
          i < targetLevel * eachLevelTeamCount;
          i++
        ) {
          // if (targetType == debugLevel) {
          //   console.warn(
          //     `teams[${i}].restOppoLots[${debugLevel}] 1111`,
          //     `filter ${oriTeam.ord}`,
          //     [...teams[i].restOppoLots[targetType]]
          //   )
          // }
          teams[i].restOppoLots[targetType] = teams[i].restOppoLots[
            targetType
          ].filter((v) => v !== oriTeam.ord)
          if (targetType == debugLevel) {
            console.warn(
              `teams[${i}].restOppoLots[${debugLevel}] 222`,
              `filter ${oriTeam.ord}`,
              [...teams[i].restOppoLots[targetType]]
            )
          }
        }

        //  检测 同一个level 是否只剩三支队伍没有匹配
        //  oriLevel oriType
        // forceLotsWhenRest3(teams, oriType, oriLevel)

        // console.log('teams[i].restOppoLots[oriType]', oriType, [
        //   ...teams[i].restOppoLots[oriType]
        // ])

        // }
        console.log('success', oriTeam.ord, targetTeam.ord)
        console.log(' ')
        successTime++
        break
      }
    }
  }

  console.log('drawOneLot2 ===== end =====' + successTime)
  console.log('  ')
  return successTime
}

const drawOneLot = (teams) => {
  console.log('drawOneLot ===== start =====')

  let successTime = 0
  try {
    // 从36支球队随机选择一支球队
    const oriTeam = teams[Math.floor(Math.random() * teamTotalCount)]
    console.log('oriTeam', oriTeam)

    // 依次遍历8种需要对阵的对手的种类 (h1:主场对阵的level1球队, a1:客场对阵的level1球队...)
    for (let oriType of opponentTypeList) {
      console.log('oriType', oriType)
      // 如果该种类的已经找到对手，则跳过
      if (oriTeam.opponents[oriType] != null) continue

      // oriTeam.restOppoLots[oriType]: 该种类的剩余对手列表
      // if (oriTeam.restOppoLots[oriType].length == 0) {
      //   // 长度为0 报错
      //   throw new Error(
      //     `oriTeam.ord: ${oriTeam.ord}, type = ${oriType}  Oponents list is empty,`
      //   )
      // }

      // // 从oriTeam.restOppoLots[oriType] 中随机选择一个目标队
      // // const restRandomIdx = Math.floor(Math.random() * oriTeam.restOppoLots[oriType].length)
      // const targetTeamOrd =
      //   oriTeam.restOppoLots[oriType][
      //     Math.floor(Math.random() * oriTeam.restOppoLots[oriType].length)
      //   ]
      // console.log('targetTeamOrd', targetTeamOrd)

      const oppoListCopy = [...oriTeam.restOppoLots[oriType]]

      shuffleArray(oppoListCopy)

      for (let targetTeamOrd of oppoListCopy) {
        console.log('targetTeamOrd', targetTeamOrd)
        const targetTeam = teams[targetTeamOrd]
        console.log('targetTeam', targetTeam)

        const targetType = (oriType[0] == 'h' ? 'a' : 'h') + oriTeam.level

        console.log(
          '对手的对手是否存在',
          targetTeam.opponents[targetType] != null
        )
        // 对手对应的targetType类型的对手已经有了  就跳过
        if (targetTeam.opponents[targetType] != null) continue

        console.log(
          'targetTeam',
          oriType,
          targetType,
          targetTeamOrd,
          targetTeam
        )
        // if (
        //   targetTeam.opponents[targetType] == null &&
        //   targetTeam.restOppoLots[targetType].includes(oriTeam.ord)
        // ) {
        // 配对成功

        oriTeam.restOppoLots[oriType] = []
        // oriTeam.restOppoLots[oriType].splice(restRandomIdx, 1)
        oriTeam.opponents[oriType] = {
          ord: targetTeam.ord,
          uuid: targetTeam.uuid,
          name: targetTeam.name,
          level: targetTeam.level
        }

        // targetTeam.restOppoLots[targetType].splice(
        //   targetTeam.restOppoLots[targetType].indexOf(oriTeam.ord),
        //   1
        // )
        targetTeam.restOppoLots[targetType] = []
        targetTeam.opponents[targetType] = {
          ord: oriTeam.ord,
          uuid: oriTeam.uuid,
          name: oriTeam.name,
          level: oriTeam.level
        }
        // console.log('teams[i].restOppoLots[oriType]', JSON.parse(teams[i].restOppoLots[oriType]))

        for (let i = 0; i < teamTotalCount; i++) {
          console.log('teams[i].restOppoLots[targetType]', targetType, [
            ...teams[i].restOppoLots[targetType]
          ])
          teams[i].restOppoLots[targetType] = teams[i].restOppoLots[
            targetType
          ].filter((v) => v !== oriTeam.ord)

          console.log('teams[i].restOppoLots[targetType]222', targetType, [
            ...teams[i].restOppoLots[targetType]
          ])

          console.log('teams[i].restOppoLots[oriType]', oriType, [
            ...teams[i].restOppoLots[oriType]
          ])

          teams[i].restOppoLots[oriType] = teams[i].restOppoLots[
            oriType
          ].filter((v) => v !== targetTeam.ord)

          console.log('teams[i].restOppoLots[oriType]222', oriType, [
            ...teams[i].restOppoLots[oriType]
          ])
        }
        console.log('success', oriTeam.ord, targetTeam.ord)
        successTime++
        break
        // }
      }
    }
  } catch (e) {
    console.error(e)
  }
  console.log('drawOneLot ===== end =====' + successTime)
  console.log('  ')
  return successTime
}

export { generateTeams, drawOneLot, drawOneLot2, opponentTypeList }
