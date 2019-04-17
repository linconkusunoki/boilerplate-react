import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../store/ducks/user'
import Nav from '../components/Nav'
import User from '../components/User'

const UserContainer = ({ user, getUsers }) => {
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <React.Fragment>
      <Nav />
      <h1>Users</h1>
      {renderUser(user)}
    </React.Fragment>
  )
}

export const renderUser = ({ loading, error, data }) => {
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!data) return null

  return <User {...data} />
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(
  mapStateToProps,
  { getUsers },
)(UserContainer)
