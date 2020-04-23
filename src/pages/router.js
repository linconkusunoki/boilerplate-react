import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import useAuthState from '../hooks/useAuthState'

const Dashboard = lazy(() => import('./dashboard'))
const Login = lazy(() => import('./login'))

function Router() {
  const { user } = useAuthState()

  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<p>Spinner...</p>}>
          {user ? (
            <>
              <Route path="/">
                <Dashboard />
              </Route>
            </>
          ) : (
            <>
              <Route path="/">
                <Login />
              </Route>
            </>
          )}
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
