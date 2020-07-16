const express = require('express')
const session = require('express-session')
function main() {
  const app = express()
  app.use(session({ saveUninitialized: true, secret: 'sw', resave: false }))
  app.get('/', (req, res) => {
    if (!req.session.view) {
      req.session.view = 1
    } else {
      req.session.view++
    }
    res.send(`hi,${req.session.view}`)
  })
  app.listen(3000)
}
main()
