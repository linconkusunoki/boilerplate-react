import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'Routes'
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers';
import { loadState, saveState } from './sessionStorage';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from 'serviceWorker'
// import * as Sentry from '@sentry/browser';

const persistedState = loadState();
const loggerMiddleware = createLogger();
let store;

// Sentry.init({
//   dsn: 'YOUR_URL_KEY',
//   beforeSend(event) {
//     // Check if it is an exception, if so, show the report dialog
//     if (event.exception) {
//       Sentry.showReportDialog();
//     }
//     return event;
//   }
// });

store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
