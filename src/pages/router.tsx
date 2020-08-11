import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { useAuth } from '../context/auth.context'

const Dashboard = lazy(() => import('./dashboard'))
const Login = lazy(() => import('./login'))

function Router() {
  const auth = useAuth()!

  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<p>Spinner...</p>}>
          {auth.token ? (
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
