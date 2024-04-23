import express from 'express'
import Quote from '../models/quotes'

const quoteRouter = express.Router()
quoteRouter.use(express.json())

quoteRouter.post('/quotes', async (req: express.Request, res: express.Response) => {
  try {
    if (!req.body.author || !req.body.content) {
      res.status(404).json({msg: 'missing quote'})
    } else {

      const newQuote = new Quote({
        author: req.body.author,
        content: req.body.content
      });

      await newQuote.save()
      res.status(201).json({msg: 'new quote added'})
    }
  } catch (error) {
    res.status(400).json({msg: 'unknown error. try again later'})
    console.log(error);
  }
}) 

export default quoteRouter