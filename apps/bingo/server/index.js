import express from 'express'
import { createClient } from 'redis'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello bingo server!')
})

app.get('/add', async (req, res) => {
  const redisClient = await createClient({
    url: 'redis://:ewyMF55l@8.218.170.207:6379'
  })
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect()
  await redisClient.set('bingo-test-key', 'bingo-test-value' + new Date())
  await redisClient.disconnect()

  res.send('redis-set finished')
})

app.get('/get', async (req, res) => {
  const redisClient = await createClient({
    url: 'redis://:ewyMF55l@8.218.170.207:6379'
  })
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect()

  // const redisClient = await createClient({
  //   url: 'redis://:ewyMF55l@8.218.170.207:6379'
  // })
  const value = await redisClient.get('bingo-test-key')
  await redisClient.disconnect()

  res.send('redis-get value:' + value)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app
