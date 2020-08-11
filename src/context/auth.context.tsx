import React, { useEffect, useState, createContext, ReactNode } from 'react'

type ContextProps = {
  token: string | null
  setToken: (value: string | null) => void

  status: string | null
  setStatus: (value: string | null) => void

  logout: () => void
}

type Props = { children: ReactNode }

const AuthContext = createContext<ContextProps | undefined>(undefined)

export function AuthProvider({ children }: Props) {
  const [status, setStatus] = useState<null | string>(null)
  const [token, setToken] = useState<null | string>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setToken(token)
    }
  }, [setToken])

  function logout() {
    localStorage.removeItem('token')
    setStatus(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider
      value={{ token, setToken, status, setStatus, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext)

export default AuthContext
