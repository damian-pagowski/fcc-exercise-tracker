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


// rate limit
const rateLimit = require("express-rate-limit");
 
// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', 1);
 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests
});
 
//  apply to all requests
app.use(limiter);

// serve static files
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

app.post('/api/exercise/add', exercises.add)

app.get('/api/exercise/log', exercises.log)

app.post('/api/exercise/users', users.add)

app.listen(port, () => console.log(`App listening on port ${port}!`))
