import React from 'react'
import ReactDOM from 'react-dom'
import Root from './utils/Root'
import configureStore from './store/configureStore'
import * as serviceWorker from './config/serviceWorker'
import initWorkboxRefresh from '@loopmode/cra-workbox-refresh'

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'))

// add the refresh button to update pwa cache
serviceWorker.register({
  onUpdate: registration => initWorkboxRefresh(registration),
})
