import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import api from '../middleware/api'
import rootReducer from './reducers'
import { loadState, saveState } from '../utils/persistState'
import thunk from 'redux-thunk'

const configureStore = () => {
  let store = createStore(
    rootReducer,
    loadState(),
    composeWithDevTools(applyMiddleware(api, thunk, createLogger())),
  )

  store.subscribe(() => saveState(store.getState()))

  return store
}

export default configureStore
