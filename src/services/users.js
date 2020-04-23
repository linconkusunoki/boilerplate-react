import api from './api'

function login({ email, password }) {
  return api.post('/login?delay=3', { email, password })
}

function getAll() {
  return api.get('/users')
}

export default {
  login,
  getAll,
}
