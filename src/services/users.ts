import { AxiosPromise } from 'axios'
import api from './api'

type Credentials = {
  email: string
  password: string
}

function login({ email, password }: Credentials): AxiosPromise {
  return api.post('/login?delay=3', { email, password })
}

function getAll(): AxiosPromise {
  return api.get('/users')
}

export default {
  login,
  getAll,
}
