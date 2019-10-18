const mongoose = require('mongoose')
const database = process.env.DB_NAME
const server = process.env.DB_SERVER_ADDR
const dbPort = process.env.DB_PORT
const uri = process.env.MONGOLAB_URI || `mongodb://${server}:${dbPort}/${database}`
console.log(
  `Connecting to database: ${process.env.MONGOLAB_URI ? "MLAB" : uri}`
)
mongoose.connect(uri)