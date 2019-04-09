import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ErrorBoundary from '../utils/ErrorBoundary'
import PrivateRoute from '../utils/PrivateRoute'
import Home from '../containers/HomeContainer'
import Count from '../containers/CountContainer'
import User from '../containers/UserContainer'

const Routes = () => (
  <ErrorBoundary>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/count" component={Count} />
      <PrivateRoute path="/users" component={User} />
    </Switch>
  </ErrorBoundary>
)

export default Routes
