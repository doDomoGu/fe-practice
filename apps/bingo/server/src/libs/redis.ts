import { createClient } from 'redis'
import 'dotenv/config'

export const redisConnect = () => {
  return createClient({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PWD
  })
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect()
}
