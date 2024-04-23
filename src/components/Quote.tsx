import React from 'react'
import { QuoteData } from '../utils/types'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { addFavourite } from '../services/userService'

interface Props {
  quote: QuoteData | undefined
  error: string
}

const Quote : React.FC<Props> = ({ quote, error }): React.ReactElement => {

  if (error) return <p className='error' style={{marginTop: '25px'}}>{error}</p>
  if (!quote || !quote.content) return <div/>

  const handleClick = () => {
    addFavourite(quote)
  }
  
  return (
    <div className='quoteContainer'>
      <div className='favContainer'>
        <div className='starContainer' onClick={handleClick}>
          <i className='bi bi-star emptyStar'/>
          <i className='bi bi-star-fill filledStar'/>
        </div>
      </div>
      <div className='quoteContent'>
        <p>''{quote.content}''</p>
        <p>- {quote.author}</p>
      </div>     
    </div>

  )
}

export default Quote