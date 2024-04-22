import axios from 'axios'
const baseUrl = 'http://localhost:3001'

export const getSum = async () => {
  const request = await axios.get(baseUrl)
  console.log(request.data)
}