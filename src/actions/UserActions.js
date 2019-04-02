import { CALL_API } from '../middleware/api'
import { API_ROOT } from '../config/api'
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../constants'

export const getUsers = () => ({
  [CALL_API]: {
    types: [FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE],
    endpoint: `${API_ROOT}/users`,
    config: {
      method: 'GET',
    },
  },
})
