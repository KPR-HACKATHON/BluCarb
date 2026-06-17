import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
})

export const getSites = () => API.get('/sites')
export const getSiteById = (id) => API.get(`/sites/${id}`)
export const getStatsSummary = () => API.get('/sites/stats/summary')