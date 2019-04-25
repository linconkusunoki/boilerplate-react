import { CALL_API } from '../../middleware/api'
import { API_ROOT } from '../../config/api'

// Action Types
export const Types = {
  FETCH_USERS: 'user/FETCH_USERS',
  FETCH_USERS_SUCCESS: 'user/FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE: 'user/FETCH_USERS_FAILURE',

  FETCH_USER: 'user/FETCH_USER',
  FETCH_USER_SUCCESS: 'user/FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'user/FETCH_USER_FAILURE',

  UPDATE_USER: 'user/UPDATE_USER',
  UPDATE_USER_SUCCESS: 'user/UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE: 'user/UPDATE_USER_FAILURE',
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

export const getUser = id => ({
  [CALL_API]: {
    types: [
      Types.FETCH_USER,
      Types.FETCH_USER_SUCCESS,
      Types.FETCH_USER_FAILURE,
    ],
    endpoint: `${API_ROOT}/users/${id}`,
    config: {
      method: 'GET',
    },
  },
})

export const updateUser = ({ id, ...body }, history) => async dispatch => {
  const response = await dispatch({
    [CALL_API]: {
      types: [
        Types.UPDATE_USER,
        Types.UPDATE_USER_SUCCESS,
        Types.UPDATE_USER_FAILURE,
      ],
      endpoint: `${API_ROOT}/users/${id}`,
      config: {
        method: 'PATCH',
        body: JSON.stringify({ ...body }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    },
  })

  console.log(response)

  history.push(`/user/${id}`)
}
