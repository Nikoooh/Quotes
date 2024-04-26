import axios from 'axios'
import { QuoteData } from '../utils/types'
const baseUrl = 'http://localhost:3001'

interface ApiResponse {
  message: string;
  status: number;
}

export const addFavourite = async (quote: QuoteData): Promise<ApiResponse> => {
  try {
    const response = await axios.post(`${baseUrl}/quotes`, quote)
    return {status: response.status, message: 'New quote successfully added to Favourites'}
  } catch (error) {
    throw new Error
  }
}

export const getFavourites = async () => {
  try {
    const request = await axios.get(`${baseUrl}/quotes`)
    return request.data
  } catch (error) {
    console.log(error);
  }
}