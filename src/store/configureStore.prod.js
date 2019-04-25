import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import api from '../middleware/api'
import { loadState, saveState } from '../utils/persistState'
import thunk from 'redux-thunk'

const configureStore = () => {
  let store = createStore(rootReducer, loadState(), applyMiddleware(api, thunk))

  store.subscribe(() => saveState(store.getState()))

  return store
}

export default configureStore
