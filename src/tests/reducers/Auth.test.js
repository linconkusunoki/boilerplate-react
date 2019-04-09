import reducer, { Types } from '../../store/ducks/signin'

describe('Auth reducer', () => {
  const initialState = {
    isAuthenticated: false,
    token: null,
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle SIGN_IN_FAILURE', () => {
    expect(reducer({}, { type: Types.SIGN_IN_FAILURE })).toEqual(initialState)
  })

  it('should handle SIGN_OUT', () => {
    expect(reducer({}, { type: Types.SIGN_OUT })).toEqual(initialState)
  })

  it('should handle SIGN_IN_SUCCESS', () => {
    expect(
      reducer(
        {},
        {
          type: Types.SIGN_IN_SUCCESS,
          payload: { token: '123abc' },
        },
      ),
    ).toEqual({
      isAuthenticated: true,
      token: '123abc',
    })
  })
})
