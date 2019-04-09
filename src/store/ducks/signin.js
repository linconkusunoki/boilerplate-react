import { CALL_API } from '../../middleware/api'
import { API_ROOT } from '../../config/api'

// Action Types
export const Types = {
  SIGN_IN: 'signin/SIGN_IN',
  SIGN_IN_SUCCESS: 'signin/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'signin/SIGN_IN_FAILURE',
  SIGN_OUT: 'signin/SIGN_OUT',
}

// Reducer
const initialState = {
  isAuthenticated: false,
  token: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SIGN_IN_SUCCESS:
      return {
        isAuthenticated: true,
        token: action.payload.token,
      }

    case Types.SIGN_IN_FAILURE:
      return initialState

    case Types.SIGN_OUT:
      return initialState

    default:
      return state
  }
}

// Action Creators
export const signOut = () => ({ type: Types.SIGN_OUT })

// Side Effects
export const signIn = ({ email, password }) => ({
  [CALL_API]: {
    types: [Types.SIGN_IN, Types.SIGN_IN_SUCCESS, Types.SIGN_IN_FAILURE],
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
