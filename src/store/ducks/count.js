// Action Types
export const Types = {
  INCREASE: 'count/INCREASE',
  DECREASE: 'count/DECREASE',
}

// Reducer
export default (state = 1, action) => {
  switch (action.type) {
    case Types.INCREASE:
      return (state = state + 1)

    case Types.DECREASE:
      return (state = state - 1)

    default:
      return state
  }
}

// Action Creators
export const increase = () => ({ type: Types.INCREASE })
export const decrease = () => ({ type: Types.DECREASE })
