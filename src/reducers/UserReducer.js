import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from 'actions/types'

const INITIAL_STATE = {
  data: null,
  error: null,
  loading: false,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        error: null,
        loading: true,
      }

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      }

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      }

    default:
      return state
  }
}
