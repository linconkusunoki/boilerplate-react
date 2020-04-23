import React from 'react'

import useAuthState from '../../hooks/useAuthState'
import useFetch from '../../hooks/useFetch'
import usersServices from '../../services/users'

export default function DashboardPage() {
  const { user } = useAuthState()
  const users = useFetch(usersServices.getAll)

  if (users.isLoading) {
    return <p>Loading Users...</p>
  }

  if (users.error) {
    return <p>Error while loading users!</p>
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      <h2>{user.token}</h2>
      <ul>
        {users.response.data.map(user => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  )
}
