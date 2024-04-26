import mongoose, { Schema } from 'mongoose'

const quoteSchema = new Schema({
  author: String,
  content: String
})

const Quote = mongoose.model('Quote', quoteSchema)

quoteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default Quote