import React from 'react'

import useForm from '../../hooks/useForm'
import validate from './loginFormValidation'
import { AuthValues } from '../../types/auth'
import usersService from '../../services/users'
import { useAuth } from '../../context/auth.context'

export default function Login() {
  const auth = useAuth()!
  const pending = auth.status === 'pending'
  const form = useForm(signIn, validate)
  const { email = '', password = '' }: AuthValues = form.values
  const errors: AuthValues = form.errors

  function signIn() {
    auth.setStatus('pending')

    usersService
      .login({ email, password })
      .then(({ data }) => {
        if (!data.token) {
          auth.setStatus('error')
        }

        localStorage.setItem('token', data.token)
        auth.setToken(data.token)
        auth.setStatus(null)
      })
      .catch(() => {
        auth.setStatus('error')
      })
  }

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={form.handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={form.handleChange}
            disabled={pending}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <br />
        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={form.handleChange}
            disabled={pending}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <br />
        <button type="submit" disabled={pending}>
          Login
        </button>
      </form>
      <pre>
        {`
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
        `}
      </pre>
    </div>
  )
}
