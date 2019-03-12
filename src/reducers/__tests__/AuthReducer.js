import reducer from '../AuthReducer'
import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT } from 'actions/types'

describe('Auth reducer', () => {
  const initialState = {
    isAuthenticated: false,
    token: null,
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle SIGN_IN_FAILURE', () => {
    expect(reducer({}, { type: SIGN_IN_FAILURE })).toEqual(initialState)
  })

  it('should handle SIGN_OUT', () => {
    expect(reducer({}, { type: SIGN_OUT })).toEqual(initialState)
  })

  it('should handle SIGN_IN_SUCCESS', () => {
    expect(
      reducer(
        {},
        {
          type: SIGN_IN_SUCCESS,
          payload: { token: '123abc' },
        },
      ),
    ).toEqual({
      isAuthenticated: true,
      token: '123abc',
    })
  })
})
