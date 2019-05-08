/* eslint no-undef: 0 */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import fetchMock from 'fetch-mock'
import CALL_API from '../../middleware/api'
import { Types, getUsers, updateUser } from '../../store/ducks/users'

const middlewares = [CALL_API, thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  afterEach(() => {
    nock.cleanAll()
    fetchMock.reset()
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

  it('should update the users', async done => {
    const history = { push: jest.fn() }
    fetchMock.mock('https://reqres.in/api/users/1', { success: true })
    const response = await store.dispatch(updateUser({ id: 1 }, history))
    expect(response.type).toEqual(Types.UPDATE_USER_SUCCESS)
    done()
  })
})
