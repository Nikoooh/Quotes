import config from "./config/config";
import express from 'express'
import cors from 'cors'
import quoteRouter from "./controllers/quoteRouter";
import mongoose from "mongoose";

mongoose.connect(config.MONGODB_URI)

const app = express()
app.use(express.json())
app.use(cors())

app.use(quoteRouter)

app.listen(config.PORT, () => {
  console.log(`Server running in port ${config.PORT}`);
})
