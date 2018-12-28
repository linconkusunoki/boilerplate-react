import axios from 'axios'
import { BASE_URL, REQUEST_TIMEOUT } from './api'

axios.defaults.baseURL = BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = REQUEST_TIMEOUT

export default axios
