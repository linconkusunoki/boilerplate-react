import React from 'react'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [state, setAuth] = React.useState({
    status: null,
    error: null,
    user: null,
  })

  React.useEffect(() => {}, [])

  return (
    <AuthContext.Provider value={{ state, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
