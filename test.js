// require('dotenv').config()
// const mongoose = require('mongoose')
// const database = process.env.DB_NAME
// const server = process.env.DB_SERVER_ADDR
// const port = process.env.DB_PORT
// console.log(
//   'Connecting to database - ' + `mongodb://${server}:${port}/${database}`
// )
// mongoose.connect(`mongodb://${server}:${port}/${database}`)

// const Exercise = require('./models/exercise')
// const User = require('./models/user')

// const ex1 = new Exercise({
//   userId: 1,
//   description: 'siedzenie na krzesle',
//   duration: 1,
//   date: '2019-10-15T00:00:00.000Z'
// })

const user = new User({ username: 'Damian' })
// ex1.save();
user.save().then(data => console.log('Just created User' + data))
//  Exercise.findByUserId(1).exec(function(err, users) {
//    if (err) console.log(err)
//     console.log("Result : "  + users);
// });

// const from = new Date('2019-10-14T00:00:00.000Z')
// const to = new Date('2019-10-30T00:00:00.000Z')
// Exercise.findWithOptions(1, from, to, 10).exec(function(err, users) {
//     if (err) console.log(err)
//      console.log("Result : "  + users);
//  });

User.findByName('Damian').then(data => console.log('Found User: ' + data))
