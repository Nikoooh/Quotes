import axios from 'axios'
const baseUrl = 'https://api.quotable.io'
import { QuoteData, Error } from '../utils/types'

interface ApiResponse<T> {
  data: T;
  status: number;
}

export const getQuote = async (): Promise<ApiResponse<QuoteData | Error>> => {
  try {
    const request = await axios.get(`${baseUrl}/random`)
    
    return {
      data: {
        author: request.data.author,
        content: request.data.content,
        errorMessage: ''
      },
      status: request.status
    };

  } catch (error) {
    return {
      data: {
        errorMessage: 'Network Error. Try again later'
      },
      status: 400
    }
  } 
} 