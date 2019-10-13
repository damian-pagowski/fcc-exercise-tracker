const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuidv1 = require('uuid/v1')

const userSchema = new Schema({
  userId: { type: String, default: uuidv1 },
  username: { type: String, required: true }
})

userSchema.statics.findByUserId = function (userId) {
  return this.find({ userId })
}

userSchema.statics.findByName = function (username) {
  return this.find({ username })
}

module.exports = mongoose.model('Users', userSchema)
