import { Types, increase, decrease } from '../../store/ducks/count'

describe('Count Actions', () => {
  it('should create an action to increment the counter', () => {
    const expectedAction = { type: Types.INCREASE }
    expect(increase()).toEqual(expectedAction)
  })

  it('should create an action to decrement the counter', () => {
    const expectedAction = { type: Types.DECREASE }
    expect(decrease()).toEqual(expectedAction)
  })
})
