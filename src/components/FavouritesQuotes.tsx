import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getFavourites } from '../services/userService'
import { QuoteData } from '../utils/types'

const FavouriteQuotes: React.FC = (): React.ReactElement => {

  const result = useQuery({
    queryKey: ['quotes'],
    queryFn: getFavourites,
    retry: false
  })

  if (result.isLoading) {
    return <div>getting favourites...</div>
  }

  if (result.isError) {
    return <div>service not available due to server error.</div>
  }

  if (!result.data) {
    return <div>no favourites yet. Get some!</div>
  }

  const quotes: QuoteData[] = result.data
  
  return (
    <div>
      {quotes.map((quote: QuoteData, idx: number) => {
        return (
          <div key={idx} className='quoteContainer quoteContent'>
            <p>''{quote.content}''</p>
            <p>- {quote.author}</p>
            <div className='divider'/>
          </div>
        )      
      })}
    </div>
  )
}

export default FavouriteQuotes