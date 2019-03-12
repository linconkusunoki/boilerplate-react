import React from 'react'
import { Link } from 'react-router-dom'
import SignOutButton from 'components/SignOutButton'

const Home = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/count">Count</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <SignOutButton />
    </ul>
  </nav>
)

export default Home
