import React from 'react'
import { QuoteData } from '../App'

interface Props {
  quote: QuoteData | undefined
  error: string
}

const Quote : React.FC<Props> = ({ quote, error }): React.ReactElement => {

  if (error) return <p className='error'>{error}</p>
  if (!quote || !quote.content) return <div/>
  
  return (
    <div className='quoteContainer'>
      <div className='quoteContent'>
        <p>''{quote.content}''</p>
        <p>- {quote.author}</p>
      </div>
    </div>
    
  )
}

export default Quote