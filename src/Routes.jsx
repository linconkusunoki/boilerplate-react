import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { include } from 'named-urls'
import { isAuthenticated } from './services/auth'

// pages
import SignIn from './pages/SignIn'
import Home from './pages/Home'

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (!isAuthenticated()) {
    return <Redirect to={{ pathname: routes.auth.signin }} />
  }

  return <Route {...rest} render={props => <Component {...props} />} />
}

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from={routes.root} to={routes.dashboard} />
      <Route exact path={routes.auth.signin} component={SignIn} />
      <Route exact path={routes.auth.signup} component={() => <p>Sign Up</p>} />
      <Route
        exact
        path={routes.auth.passwordReset}
        component={() => <p>Password Reset</p>}
      />
      <Route
        exact
        path={routes.auth.passwordVerify}
        component={() => <p>Password Verify</p>}
      />
      <PrivateRoute path={routes.dashboard} component={Home} />
    </Switch>
  </BrowserRouter>
)

export const routes = {
  root: '/',
  dashboard: '/dashboard',
  auth: include('/auth', {
    // Absolute url (ignore /auth prefix)
    signin: '/sign-in',
    signup: '/sign-up',

    // Relative urls (prefixed with /auth)
    passwordReset: 'password/reset',
    passwordVerify: 'password/verify',
  }),
}

export default Routes
