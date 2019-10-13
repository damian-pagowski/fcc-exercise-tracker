const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
const port = process.env.PORT

// middleware for logging
app.use(function middleware (req, res, next) {
  const log = `${req.method} - ${req.path} - ${req.ip}`
  console.log(log)
  next()
})

// serve static files
app.use('/public', express.static(process.cwd() + '/public'))

/// / routes
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

const exercises = {}
// add exercise
app.post('/api/exercise/add', (req, res) => {
  const userId = req.body.userId
  const description = req.body.description
  const duration = parseInt(req.body.duration)
  const date = new Date(req.body.date).toISOString()

  //
  if (!exercises[userId]) {
    exercises[userId] = []
  }
  const update = { userId, description, duration, date }
  exercises[userId].push(update)
  res.json(update)
})

// users exercises log
app.get('/api/exercise/log', (req, res) => {
  // GET /api/exercise/log?{userId}[&from][&to][&limit]
  const userId = req.query.userId
  const from = new Date(req.query.from)
  const to = new Date(req.query.to)
  const limit = parseInt(req.query.limit)
  res.json({userId, from, to, limit})
  //
})

// TODO remove later, after adding DB
const users = {}
let lastIndex = 0
// create user
app.post('/api/exercise/users', (req, res) => {
  const username = req.body.username
  const user = { username, id: ++lastIndex }
  users[lastIndex] = user
  // username=damian
  // {"username":"damian","id":"1"}
  // TODO add UUID ??
  res.json(user)

  // TODO handle user already existing
})

// TODO
// create controllers - move logic from route definition for users and exercises to those controllers

// TODO
// add database - mongodb

app.listen(port, () => console.log(`App listening on port ${port}!`))
