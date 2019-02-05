import { increase, decrease } from '../CountActions'
import { INCREASE, DECREASE } from '../types'

describe('Count Actions', () => {
  it('should create an action to increment the counter', () => {
    const expectedAction = { type: INCREASE }
    expect(increase()).toEqual(expectedAction)
  })

  it('should create an action to decrement the counter', () => {
    const expectedAction = { type: DECREASE }
    expect(decrease()).toEqual(expectedAction)
  })
})
