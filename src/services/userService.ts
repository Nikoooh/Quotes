import axios from 'axios'
import { QuoteData } from '../utils/types'
const baseUrl = 'http://localhost:3001'

export const addFavourite = async (quote: QuoteData) => {
  try {
    const request = await axios.post(`${baseUrl}/quotes`, quote)
    return request
  } catch (error) {
    console.log(error); 
  }
}