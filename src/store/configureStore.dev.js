import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import api from 'middleware/api'
import { loadState, saveState } from './persistState'

const configureStore = () => {
  let store = createStore(
    rootReducer,
    loadState(),
    applyMiddleware(api, createLogger()),
  )

  store.subscribe(() => saveState(store.getState()))

  return store
}

export default configureStore
