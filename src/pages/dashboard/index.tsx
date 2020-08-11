import React from 'react'

import useUsers from '../../hooks/useUsers'
import { useAuth } from '../../context/auth.context'

export default function DashboardPage() {
  const auth = useAuth()!
  const { users, isLoading, isError } = useUsers()

  function handleClick() {
    auth.setToken(null)
  }

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={handleClick}>Sign Out</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
