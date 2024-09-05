import { Router } from 'express'

import { redisConnect } from '@/libs/redis'

import cardsData from './data'

const router = Router()

const redisKey = 'bingo-card'

router.post('/', async (_req, res) => {
  const data: any = []
  cardsData.forEach((v) => {
    data.push(v)
  })

  const redisClient = await redisConnect()

  await redisClient.set(redisKey, JSON.stringify(data))
  await redisClient.disconnect()

  res.send({
    msg: 'init finished',
    data
  })
})

router.get('/test', async (_req, res) => {
  const errData = {}
  cardsData.forEach((v) => {
    ;(errData as any)[v.id] = []
    const arr = v.cards
    // <'pony' | 'pokemon'>
    const map = new Map()
    for (let j = 0; j < arr.length; j++) {
      const item = arr[j]
      if (map.has(item.text)) {
        map.set(item.text, map.get(item.text) + 1)
        ;(errData as any)[v.id].push(item)
      } else {
        map.set(item.text, 1)
      }
    }
  })

  // const data = JSON.stringify(cards)

  res.send({
    msg: errData
  })
})

router.get('/get', async (_req, res) => {
  const redisClient = await redisConnect()
  const data = <string>await redisClient.get(redisKey)
  await redisClient.disconnect()

  res.send({
    raw: data,
    data: JSON.parse(data)
  })
})

export default router
