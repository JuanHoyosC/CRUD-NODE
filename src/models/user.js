const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
   name: String,
   lastName: String,
   age: Number,
   email:String
})

const user = mongoose.model('users', userSchema)

module.exports = user