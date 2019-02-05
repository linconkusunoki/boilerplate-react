import { getUser } from '../UserActions'
import { CALL_API } from 'middleware/api'
import { API_ROOT } from 'config/api'
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../types'

describe('User Actions', () => {
  it('should create an action to get the user', () => {
    const expectedAction = {
      [CALL_API]: {
        endpoint: `${API_ROOT}/users/linconkusunoki`,
        method: 'GET',
        types: [FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE],
      },
    }
    expect(getUser('linconkusunoki')).toEqual(expectedAction)
  })
})
