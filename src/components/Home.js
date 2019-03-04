import React from 'react'
import Nav from 'components/Nav'
import LoginForm from 'components/LoginForm'

const Home = ({ email, password }) => (
  <React.Fragment>
    <Nav />
    <h1>Home</h1>
    <pre>
      {`
        {
          email: ${email},
          password: ${password}
        }
      `}
    </pre>
    <LoginForm />
  </React.Fragment>
)

export default Home
