const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
  userId: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true }
})

exerciseSchema.statics.findByUserId = function (userId) {
  return this.find({ userId })
}

exerciseSchema.statics.findWithParams = function (userId, from, to, limit) {
  return this.find({ userId, date: { $gte: from, $lte: to } }).limit(limit)
}

module.exports = mongoose.model('Exercise', exerciseSchema)
