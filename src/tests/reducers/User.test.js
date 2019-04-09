import reducer, { Types } from '../../store/ducks/user'

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
    expect(reducer({}, { type: Types.FETCH_USERS })).toEqual({
      error: null,
      loading: true,
    })
  })

  it('should handle FETCH_USERS_SUCCESS', () => {
    const user = { name: 'John Doe' }
    expect(
      reducer({}, { type: Types.FETCH_USERS_SUCCESS, payload: user }),
    ).toEqual({
      error: null,
      loading: false,
      data: user,
    })
  })

  it('should handle FETCH_USERS_FAILURE', () => {
    const error = { message: 'Something bad happened' }
    expect(reducer({}, { type: Types.FETCH_USERS_FAILURE, error })).toEqual({
      loading: false,
      error,
    })
  })
})
