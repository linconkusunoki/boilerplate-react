/* eslint no-undef: 0 */
import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import CALL_API from '../../middleware/api'
import { Types, getUsers } from '../../store/ducks/user'

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
    expect(response.type).toEqual(Types.FETCH_USERS_SUCCESS)
    expect(response.payload).toEqual(expectedResponse)
    done()
  })

  it('should fetch the users and get an error', async done => {
    nock(baseUrl)
      .defaultReplyHeaders(headers)
      .get('/users')
      .reply(401, {})
    const response = await store.dispatch(getUsers())
    expect(response.type).toEqual(Types.FETCH_USERS_FAILURE)
    expect(response.error).toEqual('Something bad happened')
    done()
  })
})
