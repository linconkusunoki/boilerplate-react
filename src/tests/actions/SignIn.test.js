/* eslint no-undef: 0 */
import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import CALL_API from '../../middleware/api'
import { Types, signIn, signOut } from '../../store/ducks/signin'

const middlewares = [CALL_API]
const mockStore = configureMockStore(middlewares)
const credentials = {
  email: 'john@doe.com',
  passowrd: '123test',
}

describe('async actions', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  afterEach(() => {
    nock.cleanAll()
  })

  it('should login with success', async done => {
    const expectedResponse = { success: true }
    nock(baseUrl)
      .defaultReplyHeaders(headers)
      .post('/login')
      .reply(200, expectedResponse)
    const response = await store.dispatch(signIn(credentials))
    expect(response.type).toEqual(Types.SIGN_IN_SUCCESS)
    expect(response.payload).toEqual(expectedResponse)
    done()
  })

  it('should login and get an error', async done => {
    nock(baseUrl)
      .defaultReplyHeaders(headers)
      .post('/login')
      .reply(401, {})
    const response = await store.dispatch(signIn(credentials))
    expect(response.type).toEqual(Types.SIGN_IN_FAILURE)
    expect(response.error).toEqual('Something bad happened')
    done()
  })

  it('should sign out the user', () => {
    expect(signOut()).toEqual({ type: Types.SIGN_OUT })
  })
})
