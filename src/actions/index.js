import { RSAA } from 'redux-api-middleware'

// Count
export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

export const getUser = user => ({
  [RSAA]: {
    types: [FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE],
    endpoint: `https://api.github.com/?user=${user}`,
    method: 'GET',
  },
})
