import React from 'react'
import { Route } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import Home from 'components/Home'
import Count from 'components/Count'
import User from 'containers/User'

const Routes = () => (
  <ErrorBoundary>
    <Route path="/" exact component={Home} />
    <Route path="/count" component={Count} />
    <Route path="/github" component={User} />
  </ErrorBoundary>
)

export default Routes
