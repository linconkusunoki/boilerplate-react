import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ErrorBoundary from 'ErrorBoundary'
import Home from 'components/Home'
import Count from 'components/Count'

const Routes = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Route path="/" exact component={Home} />
      <Route path="/count" component={Count} />
    </ErrorBoundary>
  </BrowserRouter>
)

export default Routes
