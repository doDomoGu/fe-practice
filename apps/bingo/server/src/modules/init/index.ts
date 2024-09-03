import { Router } from 'express'

import { redisConnect } from '@/libs/redis'

import cards from './cards'

const router = Router()

const redisKey = 'bingo-card'

router.post('/', async (_req, res) => {
  const data = []
  data.push({
    title: '宝可梦',
    id: 'pokemon',
    cards: cards['pokemon']
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
  Object.keys(cards).forEach((key) => {
    ;(errData as any)[key] = []
    const arr = (cards as any)[key]
    // <'pony' | 'pokemon'>
    const map = new Map()
    for (let j = 0; j < arr.length; j++) {
      const item = arr[j]
      if (map.has(item.text)) {
        map.set(item.text, map.get(item.text) + 1)
        ;(errData as any)[key].push(item)
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
