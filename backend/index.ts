import config from "./config/config";
import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).json({message: "Yippee"})
})

app.listen(config.PORT, () => {
  console.log(`Server running in port ${config.PORT}`);
})
