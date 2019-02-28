import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'containers/Root'
import configureStore from './store/configureStore'
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './config/serviceWorker'
import initWorkboxRefresh from '@loopmode/cra-workbox-refresh'

const store = configureStore()

ReactDOM.render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root'),
)

// add the refresh button to update pwa cache
serviceWorker.register({
  onUpdate: registration => initWorkboxRefresh(registration),
})
