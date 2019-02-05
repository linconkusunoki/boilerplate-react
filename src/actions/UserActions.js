import { CALL_API } from 'middleware/api'
import { API_ROOT } from 'config/api'
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './types'

export const getUser = user => ({
  [CALL_API]: {
    types: [FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE],
    endpoint: `${API_ROOT}/users/${user}`,
    method: 'GET',
  },
})
