/* eslint no-undef: 0 */
import configureMockStore from 'redux-mock-store'
import CALL_API from 'middleware/api'
import { getUsers } from 'actions/UserActions'
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from 'actions/types'
import nock from 'nock'

const middlewares = [CALL_API]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  afterEach(() => {
    nock.cleanAll()
  })

  it('should fetch the users with success', async done => {
    const expectedResponse = { success: true }
    nock(baseUrl)
      .defaultReplyHeaders(headers)
      .get('/users')
      .reply(200, expectedResponse)
    const response = await store.dispatch(getUsers())
    expect(response.type).toEqual(FETCH_USERS_SUCCESS)
    expect(response.payload).toEqual(expectedResponse)
    done()
  })

  it('should fetch the users and get an error', async done => {
    nock(baseUrl)
      .defaultReplyHeaders(headers)
      .get('/users')
      .reply(401, {})
    const response = await store.dispatch(getUsers())
    expect(response.type).toEqual(FETCH_USERS_FAILURE)
    expect(response.error).toEqual('Something bad happened')
    done()
  })
})
