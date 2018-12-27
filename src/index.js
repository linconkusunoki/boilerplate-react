import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'Routes'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'reducers'
import { loadState, saveState } from './persistState'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from 'serviceWorker'

const persistedState = loadState()
const loggerMiddleware = createLogger()

let store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
)

store.subscribe(() => saveState(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
