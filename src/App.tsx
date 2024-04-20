import { useState } from 'react'
import './css/App.css'
import { getQuote } from './services/quoteService'
import Quote from './components/Quote'
import { Backdrop, CircularProgress } from '@mui/material'
import { filterQuote } from './utils/helperFunctions'

export interface QuoteType {
  author: String,
  content: String,
  tags: Array<String>
}

const App = () => {

  const [quote, setQuote] = useState<QuoteType>()
  const [backdropOpen, setBackdropOpen] = useState<boolean>(false)
  
  const handleClick = async () => {
    try {
      setBackdropOpen(true)
      const request = await getQuote()
      if (request.status === 200) {
        setQuote(filterQuote(request.data))
        setBackdropOpen(false)
      }
    } catch (error) {
      console.log(error);  
      setBackdropOpen(false)   
    }
  }

  return (
    <div className='appContainer'>
      <h1>Random Quote Generator</h1>
      <button onClick={handleClick}>Get Quote</button>
      <div className='quoteContainer'>  
        <Quote quote={quote}/>
        <Backdrop open={backdropOpen}>
          <CircularProgress />
        </Backdrop>
      </div>
    </div>
  )

}

export default App
