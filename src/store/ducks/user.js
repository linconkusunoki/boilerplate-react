import { CALL_API } from '../../middleware/api'
import { API_ROOT } from '../../config/api'

// Action Types
export const Types = {
  FETCH_USERS: 'user/FETCH_USERS',
  FETCH_USERS_SUCCESS: 'user/FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE: 'user/FETCH_USERS_FAILURE',
}

// Reducer
const initialState = {
  data: null,
  error: null,
  loading: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_USERS:
      return {
        ...state,
        error: null,
        loading: true,
      }

    case Types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      }

    case Types.FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      }

    default:
      return state
  }
}

// Side Effects
export const getUsers = () => ({
  [CALL_API]: {
    types: [
      Types.FETCH_USERS,
      Types.FETCH_USERS_SUCCESS,
      Types.FETCH_USERS_FAILURE,
    ],
    endpoint: `${API_ROOT}/users`,
    config: {
      method: 'GET',
    },
  },
})
