import React from 'react'

import AuthContext from '../../contexts/auth.context'
import useAuthState from '../../hooks/useAuthState'
import useForm from '../../hooks/useForm'
import validate from './loginFormValidation'
import usersServices from '../../services/users'

export default function Login() {
  const { handleChange, handleSubmit, values, errors } = useForm(
    signIn,
    validate
  )
  const { state, setAuth } = React.useContext(AuthContext)
  const { isPending, isError } = useAuthState()

  async function signIn() {
    setAuth({ ...state, status: 'pending' })

    try {
      const response = await usersServices.login(values)
      setAuth({ ...state, user: { token: response.data.token } })
    } catch (error) {
      setAuth({ ...state, error, status: 'error' })
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            disabled={isPending}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <br />
        <div>
          <input
            type="password"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            disabled={isPending}
            required
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <br />
        {isError && <p>Email or Password wrong</p>}
        <button type="submit" disabled={isPending}>
          {isPending ? 'Loading' : 'Login'}
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
