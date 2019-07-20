import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import { Normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  body {
    background: #191a21;
  }
`

export default () => (
  <Router>
    <Normalize />
    <GlobalStyle />
    <Routes />
  </Router>
)
