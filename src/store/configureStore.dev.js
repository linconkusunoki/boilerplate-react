import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import { loadState, saveState } from './persistState'

const configureStore = () => {
  let store = createStore(
    rootReducer,
    loadState(),
    applyMiddleware(apiMiddleware, createLogger()),
  )

  store.subscribe(() => saveState(store.getState()))

  return store
}

export default configureStore
