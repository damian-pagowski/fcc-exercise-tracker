const Exercise = require('../models/exercise')

exports.add = (req, res) => {
  const userId = req.body.userId
  const description = req.body.description
  const duration = parseInt(req.body.duration)
  const date = new Date(req.body.date).toISOString()

  const exercise = new Exercise({
    userId,
    description,
    duration,
    date
  })
  exercise.save().then(data =>
    res.json({
      userId: data.userId,
      description: data.description,
      duration: data.duration,
      date: data.date
    })
  )
}

exports.log = (req, res) => {
  const today = new Date()
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)
  const unixEpochStart = new Date(1 * 1000)
  const defaultLimit = 100
  const userId = req.query.userId
  const from = !isNaN(new Date(req.query.from).getTime())
    ? new Date(req.query.from)
    : unixEpochStart
  const to = !isNaN(new Date(req.query.to).getTime())
    ? new Date(req.query.to)
    : tomorrow
  const limit = parseInt(req.query.limit) || defaultLimit

  console.log(`Exercise Log >> from : ${from}, to: ${to}, limit: ${limit}`)
  Exercise.findWithParams(userId, from, to, limit).then(data => res.json(data))
}
