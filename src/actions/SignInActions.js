import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
} from '../constants'
import { CALL_API } from '../middleware/api'
import { API_ROOT } from '../config/api'

export const signIn = ({ email, password }) => ({
  [CALL_API]: {
    types: [SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE],
    endpoint: `${API_ROOT}/login`,
    config: {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  },
})

export const signOut = () => ({ type: SIGN_OUT })
