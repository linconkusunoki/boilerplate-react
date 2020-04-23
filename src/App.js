import React from 'react'

import { AuthProvider } from './contexts/auth.context'
import Router from './pages/router'

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App
