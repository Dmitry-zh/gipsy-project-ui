import axios from 'axios'

const client = axios

client.defaults.baseURL = import.meta.env.VITE_API_URL

export { client }
