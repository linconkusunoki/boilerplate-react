import { INCREASE, DECREASE } from 'actions/types'

export default (state = 1, action) => {
  switch (action.type) {
    case INCREASE:
      return (state = state + 1)

    case DECREASE:
      return (state = state - 1)

    default:
      return state
  }
}
