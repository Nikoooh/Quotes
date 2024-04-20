import React from 'react'
import { QuoteType } from '../App'

interface Props {
  quote: QuoteType | undefined
}

const Quote : React.FC<Props> = ({ quote }): React.ReactElement => {
  if (!quote) return <div/>
  return (
    <div>
      <p className='quoteContent'>''{quote.content}''</p>
      <p className='quoteContent'>- {quote.author}</p>
    </div>
  )
}

export default Quote