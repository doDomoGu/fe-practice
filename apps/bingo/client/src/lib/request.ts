import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_BASE_URL

const request = axios.create({
  //   withCredentials: false,
  baseURL: baseUrl,
  timeout: 5000,
  headers: { Accept: 'application/json' }
})

export default request
