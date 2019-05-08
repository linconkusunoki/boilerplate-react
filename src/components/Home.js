import React from 'react'
import Nav from './Nav'
import LoginForm from './LoginForm'

const Home = ({ signIn }) => (
  <React.Fragment>
    <Nav />
    <h1>Home</h1>
    <pre>
      email: eve.holt@reqres.in <br />
      password: cityslicka
    </pre>
    <LoginForm onSubmit={signIn} />
  </React.Fragment>
)

export default Home
