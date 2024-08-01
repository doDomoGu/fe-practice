import express from 'express'
import bodyParser from 'body-parser'
import crypto from 'crypto'

// import verifySignature from './verifySignature.js'

const app = express()

const PORT = 3000
const GITHUB_WEBHOOK_SECRET = '123456'

// 解析POST请求体
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// 验证GitHub签名的中间件
app.use((req, res, next) => {
  const signature = req.headers['x-hub-signature-256']
  console.log({ signature })

  if (!signature) {
    return res.sendStatus(403)
  }

  const sha = crypto.createHmac('sha256', GITHUB_WEBHOOK_SECRET)
  const payload = req.body
  console.log(payload)
  sha.update(JSON.stringify(payload))
  const createdSignature = `sha256=${sha.digest('hex')}`
  console.log({ createdSignature })
  if (signature !== createdSignature) {
    return res.sendStatus(403)
  }

  next()
})

// 处理GitHub webhook
app.post('/', (req, res) => {
  const event = req.headers['x-github-event']
  console.log({ event })
  if (event === 'ping') {
    // 响应GitHub的ping事件
    res.status(200).send('PONG')
  } else {
    // 处理其他事件
    console.log(event, req.body)
    res.status(200).send('Event received')
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
