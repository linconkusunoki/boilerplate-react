import reducer from '../CountReducer'
import { INCREASE, DECREASE } from 'actions/types'

describe('Count reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(1)
  })

  it('should handle INCREASE', () => {
    expect(reducer(1, { type: INCREASE })).toEqual(2)
  })

  it('should handle DECREASE', () => {
    expect(reducer(1, { type: DECREASE })).toEqual(0)
  })
})
