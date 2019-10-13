const mongoose = require('mongoose')
const database = process.env.DB_NAME
const server = process.env.DB_SERVER_ADDR
const dbPort = process.env.DB_PORT
console.log(
  'Connecting to database - ' + `mongodb://${server}:${dbPort}/${database}`
)
mongoose.connect(`mongodb://${server}:${dbPort}/${database}`)