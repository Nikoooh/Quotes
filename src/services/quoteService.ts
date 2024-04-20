import axios from 'axios'
const baseUrl = 'https://api.quotable.io'

export const getQuote = async () => {
  const request = await axios.get(`${baseUrl}/random`)
  console.log(request);
  
  return request
} 