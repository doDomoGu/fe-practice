import express from 'express'
import bodyParser from 'body-parser'
import verifySignature from './verifySignature.js'

const SECRET = 'sadadsabcdsdfdsad'

const app = express()

// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post(
  '/',
  // express.json({ type: 'application/json' }),
  (request, response) => {
    response.status(202).send('Accepted')

    // const githubEvent = request.headers['x-github-event']
    // console.log(githubEvent)
    console.log(request.headers)
    console.log(request.body)

    verifySignature(
      SECRET,
      request.headers['x-hub-signature-256'],
      request.body
    ).then((r) => {
      console.log('verify', r)
    })
    // verifySignature
    // if (githubEvent === 'issues') {
    //   const data = request.body;
    //   const action = data.action;
    //   if (action === 'opened') {
    //     console.log(`An issue was opened with this title: ${data.issue.title}`);
    //   } else if (action === 'closed') {
    //     console.log(`An issue was closed by ${data.issue.user.login}`);
    //   } else {
    //     console.log(`Unhandled action for the issue event: ${action}`);
    //   }
    // } else if (githubEvent === 'ping') {
    //   console.log('GitHub sent the ping event');
    // } else {
    //   console.log(`Unhandled event: ${githubEvent}`);
    // }
  }
)

const port = 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
