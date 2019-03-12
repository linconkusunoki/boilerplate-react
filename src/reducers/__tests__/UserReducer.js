import reducer from '../UserReducer'
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from 'actions/types'

describe('User reducer', () => {
  const initialState = {
    data: null,
    error: null,
    loading: false,
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_USERS', () => {
    expect(reducer({}, { type: FETCH_USERS })).toEqual({
      error: null,
      loading: true,
    })
  })

  it('should handle FETCH_USERS_SUCCESS', () => {
    const user = { name: 'John Doe' }
    expect(reducer({}, { type: FETCH_USERS_SUCCESS, payload: user })).toEqual({
      error: null,
      loading: false,
      data: user,
    })
  })

  it('should handle FETCH_USERS_FAILURE', () => {
    const error = { message: 'Something bad happened' }
    expect(reducer({}, { type: FETCH_USERS_FAILURE, error })).toEqual({
      loading: false,
      error,
    })
  })
})
