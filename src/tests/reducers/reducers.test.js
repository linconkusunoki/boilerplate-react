import reducers from '../../store/reducers'

describe('reducers', () => {
  const initialState = {
    auth: { isAuthenticated: false, token: null },
    count: 1,
    form: {},
    user: { data: null, error: null, loading: false },
  }
  it('should validate the initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState)
  })
})
