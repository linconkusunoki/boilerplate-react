import React from 'react'
import * as S from './styles'
import { routes } from '../../Routes'
import { userLogin } from '../../services/user'
import { login } from '../../services/auth'

const Home = ({ history }) => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(true)

  const handleSubmit = async data => {
    setLoading(true)
    try {
      const resp = await userLogin(data)
      setLoading(false)
      login(resp.data.token)
      history.push(routes.dashboard)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Login</S.Title>
        <S.Text>Please sign-in to continue</S.Text>
        <S.Input name="email" placeholder="Email" disabled={loading} />
        <S.Input
          name="password"
          type="password"
          placeholder="Password"
          disabled={loading}
        />
        {error && <S.Error>Email or Password is wrong!</S.Error>}
        <S.ButtonWrapper>
          <S.Link to={routes.auth.passwordReset}>Forget password?</S.Link>
          <S.Button type="submit" disabled={loading}>
            Sign in
          </S.Button>
        </S.ButtonWrapper>
        <S.Divider />
        <S.Text>
          Don't have an account?{' '}
          <S.Link to={routes.auth.signup}>Create an account</S.Link>
        </S.Text>
      </S.Form>
    </S.Wrapper>
  )
}

export default Home
