import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ErrorBoundary from '../utils/ErrorBoundary'
import PrivateRoute from '../utils/PrivateRoute'
import Home from '../pages/HomePage'
import Count from '../pages/CountPage'
import ListUsers from '../pages/ListUsersPage'
import UserDetails from '../pages/UserDetailsPage'
import UserEdit from '../pages/UserEditPage'

const Routes = () => (
  <ErrorBoundary>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/count" component={Count} />
      <PrivateRoute path="/users" component={ListUsers} />
      <PrivateRoute path="/user/:id/edit" component={UserEdit} />
      <PrivateRoute path="/user/:id" component={UserDetails} />
    </Switch>
  </ErrorBoundary>
)

export default Routes
