const exercises = {}

exports.add = (req, res) => {
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
}

exports.log = (req, res) => {
  // GET /api/exercise/log?{userId}[&from][&to][&limit]
  const userId = req.query.userId
  const from = new Date(req.query.from)
  const to = new Date(req.query.to)
  const limit = parseInt(req.query.limit)
  res.json({ userId, from, to, limit })
  //
}
