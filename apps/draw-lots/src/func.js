import { v4 as uuidv4 } from 'uuid'

const initRestOppoLots = (start, cur) => {
  const ret = []
  for (let i = 0; i < 9; i++) {
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
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 9; j++) {
      const uuid = uuidv4().slice(0, 6)
      const ord = i * 9 + j // ord 从0开始，35结束
      teams.push({
        ord,
        uuid,
        name: `Team - ${uuid}`,
        level: i + 1,
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
  console.log('drawOneLot ===== start =====')

  let successTime = 0
  try {
    // 从36支球队随机选择一支球队
    const oriTeam = teams[Math.floor(Math.random() * 36)]
    console.log('oriTeam', oriTeam)

    // 依次遍历8种需要对阵的对手的种类 (h1:主场对阵的level1球队, a1:客场对阵的level1球队...)
    for (let oriType of ['h1', 'a1', 'h2', 'a2', 'h3', 'a3', 'h4', 'a4']) {
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

        for (let i = 0; i < 36; i++) {
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

export { generateTeams, drawOneLot }
