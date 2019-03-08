import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'config/routes'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
