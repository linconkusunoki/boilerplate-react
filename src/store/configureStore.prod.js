import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { loadState, saveState } from './persistState'

const configureStore = () => {
  let store = createStore(rootReducer, loadState(), applyMiddleware(thunk))
  store.subscribe(() => saveState(store.getState()))
  return store
}

export default configureStore
