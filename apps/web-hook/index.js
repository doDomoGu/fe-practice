import express from 'express'
import bodyParser from 'body-parser'
import crypto from 'crypto'

import { spawn } from 'child_process'
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
  // console.log({ signature })

  if (!signature) {
    return res.sendStatus(403)
  }

  const sha = crypto.createHmac('sha256', GITHUB_WEBHOOK_SECRET)
  const payload = req.body
  // console.log(payload)
  sha.update(JSON.stringify(payload))
  const createdSignature = `sha256=${sha.digest('hex')}`
  // console.log({ createdSignature })
  if (signature !== createdSignature) {
    return res.sendStatus(403)
  }

  next()
})

function run_cmd(cmd, args, callback) {
  var child = spawn(cmd, args)
  var resp = ''
  child.stdout.on('data', function (buffer) {
    resp += buffer.toString()
  })
  child.stdout.on('end', function () {
    callback(resp)
  })
}

// 处理GitHub webhook
app.post('/', (req, res) => {
  const event = req.headers['x-github-event']

  if (event === 'ping') {
    // 响应GitHub的ping事件
    res.status(200).send('PONG')
  } else if (event === 'push') {
    run_cmd('sh', ['../../deploy.sh'], function (text) {
      console.log('result', text)
    })
    res.status(200).send('push Deployed received')
  } else {
    // 处理其他事件
    console.log(event, req.body)
    res.status(200).send('Event received')
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
