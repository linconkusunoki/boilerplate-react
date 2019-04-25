import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../store/ducks/users'
import UserDetail from '../components/UserDetail'
import { Link } from 'react-router-dom'

const UserDetailsPage = ({
  match: {
    params: { id },
  },
  users: { data },
}) => {
  const user = data.filter(user => user.id === parseInt(id))[0]

  return (
    <div>
      Details from User {user.id}
      <UserDetail {...user} />
      <Link to={`/user/${id}/edit`}>Edit</Link>
      <hr />
      <Link to={`/users`}>Back to users</Link>
    </div>
  )
}

const mapStateToProps = ({ users }) => ({ users: users.data })

export default connect(
  mapStateToProps,
  { getUser },
)(UserDetailsPage)
