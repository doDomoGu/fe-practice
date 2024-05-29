import { v4 as uuidv4 } from 'uuid'

export default function () {
  const teams = []
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 9; j++) {
      const uuid = uuidv4().slice(0, 6)
      teams.push({
        ord: (i - 1) * 9 + j,
        uuid,
        name: `Team - ${uuid}`,
        level: i
      })
    }
  }
  return teams
}
