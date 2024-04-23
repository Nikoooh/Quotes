import mongoose, { Schema } from 'mongoose'

const quoteSchema = new Schema({
  author: String,
  content: String
})

const Quote = mongoose.model('Quote', quoteSchema)

export default Quote