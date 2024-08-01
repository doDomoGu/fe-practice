const http = require('http')

const SECRET = 'sadadsabcdsdfdsad'

const server = http.createServer((req, res) => {
  console.log(`--- ${req.method}`)
  let signature = req.headers['x-hub-signature']
  if (signature) {
    signature = signature.split('=')[1]
  }
  res.end('success')
})

server.listen(3000, () => {
  console.log('web-hook listen')
})
