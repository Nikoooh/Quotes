import { useState } from 'react'
import '../css/App.css'
import { getQuote } from '../services/quoteService'
import Quote from './Quote'
import Loading from './Loading'
import { QuoteData} from '../utils/types'

const FrontPage: React.FC = (): React.ReactElement => {

  const [quote, setQuote] = useState<QuoteData>({author: '', content: ''})
  const [backdropOpen, setBackdropOpen] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleClick = async () => {
    
    setError('')
    setQuote({author: '', content: ''})
    setBackdropOpen(true)
    
    const request = await getQuote()
     
    if (request.status === 200) {
      if ('author' in request.data && 'content' in request.data) {
        setQuote(request.data);
      }
      setBackdropOpen(false);
    } else if (request.status === 500) {
      if ('errorMessage' in request.data) {
        setError(request.data.errorMessage);
      }
      setBackdropOpen(false);
    }
  }

  return (
    <div className='appContainer'>
      <div>
        <button onClick={handleClick}>Get Quote</button>   
        <Quote quote={quote} error={error} setBackdropOpen={setBackdropOpen}/>
        <Loading open={backdropOpen}/>
      </div>
    </div>
  )

}

export default FrontPage