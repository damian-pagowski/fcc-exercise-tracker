const User = require('../models/user')

exports.add = (req, res) => {
  const username = req.body.username
  if (!username) {
    res.json({ error: 'invalid username' })
  } else {
    User.findByName(username).then(data => {
      if (data.length < 1) {
        console.log('creating new user!')
        const user = new User({ username })
        user
          .save()
          .then(d => res.json({ username: d.username, userId: d.userId }))
      } else {
        console.log('User alredy existing!')
        res.json({ username: data[0].username, userId: data[0].userId })
      }
    })
  }
}
