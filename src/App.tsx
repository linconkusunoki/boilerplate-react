import React from 'react'
import { SWRConfig } from 'swr'

import Router from './pages/router'
import utils from './utils'
import { AuthProvider } from './context/auth.context'

function App() {
  return (
    <AuthProvider>
      <SWRConfig value={{ fetcher: utils.fetcher }}>
        <Router />
      </SWRConfig>
    </AuthProvider>
  )
}

export default App
