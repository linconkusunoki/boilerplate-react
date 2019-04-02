import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT } from '../constants'

const initialState = {
  isAuthenticated: false,
  token: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        isAuthenticated: true,
        token: action.payload.token,
      }

    case SIGN_IN_FAILURE:
      return initialState

    case SIGN_OUT:
      return initialState

    default:
      return state
  }
}
