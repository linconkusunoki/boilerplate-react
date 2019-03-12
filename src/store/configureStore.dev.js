import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import api from 'middleware/api'
import { loadState, saveState } from 'utils/persistState'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = () => {
  let store = createStore(
    rootReducer,
    loadState(),
    composeWithDevTools(applyMiddleware(api, createLogger())),
  )

  store.subscribe(() => saveState(store.getState()))

  return store
}

export default configureStore
