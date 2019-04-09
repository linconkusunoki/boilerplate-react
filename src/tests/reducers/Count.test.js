import reducer, { Types } from '../../store/ducks/count'

describe('Count reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(1)
  })

  it('should handle INCREASE', () => {
    expect(reducer(1, { type: Types.INCREASE })).toEqual(2)
  })

  it('should handle DECREASE', () => {
    expect(reducer(1, { type: Types.DECREASE })).toEqual(0)
  })
})
