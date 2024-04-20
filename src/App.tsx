import { useState } from 'react'
import './css/App.css'
import { getQuote } from './services/quoteService'
import Quote from './components/Quote'

export interface QuoteType {
  author: String,
  content: String,
  tags: Array<String>
}

const App = () => {

  const [quote, setQuote] = useState<QuoteType>()

  const handleClick = async () => {
    try {
      const request = await getQuote()
      if (request.status === 200) {
        setQuote(request.data)
      }
    } catch (error) {
      console.log(error);     
    }
  }

  return (
    <div className='appContainer'>
      <h1>Random Quote Generator</h1>
      <button onClick={handleClick}>Get Quote</button>
      <div className='quoteContainer'>     
        <Quote quote={quote}/>
      </div>
    </div>
  )

}

export default App
