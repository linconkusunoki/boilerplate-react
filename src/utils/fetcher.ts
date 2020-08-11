import api from '../services/api'

const fetcher = (endpoint: string) =>
  api.get(`${endpoint}`).then(res => res.data.data)

export default fetcher
