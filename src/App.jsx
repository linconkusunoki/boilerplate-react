import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import { Normalize } from 'styled-normalize'

export default () => (
  <Router>
    <Normalize />
    <Routes />
  </Router>
)
