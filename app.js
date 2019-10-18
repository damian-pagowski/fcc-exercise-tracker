const express = require('express')
const app = express()
require('dotenv').config()
require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
const port = process.env.PORT || 5000

const exercises = require('./controllers/exercises')
const users = require('./controllers/users')

// middleware for logging
app.use(function middleware (req, res, next) {
  const log = `${req.method} - ${req.path} - ${req.ip}`
  console.log(log)
  next()
})

// serve static files
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

app.post('/api/exercise/add', exercises.add)

app.get('/api/exercise/log', exercises.log)

app.post('/api/exercise/users', users.add)

app.listen(port, () => console.log(`App listening on port ${port}!`))
