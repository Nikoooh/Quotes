import React, { useState } from 'react'
import { QuoteData } from '../utils/types'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { addFavourite } from '../services/userService'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface Props {
  quote: QuoteData | undefined
  error: string
  setBackdropOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface Message {
  message: string
  type: string | undefined
}

const Quote : React.FC<Props> = ({ quote, error, setBackdropOpen }): React.ReactElement => {
  
  const [message, setMessage] = useState<Message>({message: '', type: undefined})
  const newMutation = useMutation({mutationFn: addFavourite})
  const queryClient = useQueryClient();

  if (error) return <p className='error' style={{marginTop: '25px'}}>{error}</p>
  if (!quote || !quote.content) return <div/>

  const handleClick = async () => {
    setBackdropOpen(true)

    newMutation.mutate(quote, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['quotes'] });
        setMessage({message: data.message, type: 'success'})
      },
      onError: () => {
        setMessage({message: 'Network Error. Try again later', type: 'error'})
      }
    })

    setBackdropOpen(false)
    setTimeout(() => {
      setMessage({message: '', type: undefined})
    }, 4000)   

  }
  
  return (
    <div className='quoteContainer'>
      <div className='favContainer'>
        <div className='starContainer' onClick={handleClick}>
          <i className='bi bi-star emptyStar'/>
          <i className='bi bi-star-fill filledStar'/>
          {(message.type) ? <p className={(message.type === 'success') ? 'success' : 'error'}>{message.message}</p> : null}
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