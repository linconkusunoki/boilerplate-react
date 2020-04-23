import { useContext } from 'react'
import AuthContext from '../contexts/auth.context'

export default function useAuthState() {
  const { state } = useContext(AuthContext)
  const isPending = state.status === 'pending'
  const isError = state.status === 'error'
  const isSuccess = state.status === 'success'
  const isAuthenticated = state.user && isSuccess

  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  }
}
