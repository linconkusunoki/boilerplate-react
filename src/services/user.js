import api from './api'

export const userLogin = async data => {
  try {
    const resp = await api.post('/users/login', data)
    return resp
  } catch (error) {
    return error
  }
}
