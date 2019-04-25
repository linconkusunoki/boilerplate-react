import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../store/ducks/users'
import Nav from '../components/Nav'
import UserItem from '../components/UserItem'

const UserPage = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <React.Fragment>
      <Nav />
      <h1>Users</h1>
      {renderUser(users)}
    </React.Fragment>
  )
}

export const renderUser = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!data) return null

  return <UserItem {...data} />
}

const mapStateToProps = ({ users }) => ({ users })

export default connect(
  mapStateToProps,
  { getUsers },
)(UserPage)
