import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actions'

const INITIAL_STATE = {}

export default function(state = INITIAL_STATE, action) {
  let error
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        error: null,
        loading: true,
      }

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      }

    case FETCH_USER_FAILURE:
      error = action.payload.data || { message: action.payload.message }
      return {
        ...state,
        error,
        loading: false,
      }

    default:
      return state
  }
}
