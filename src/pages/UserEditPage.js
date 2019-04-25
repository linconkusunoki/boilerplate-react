import React from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../store/ducks/users'
import UserEdit from '../components/UserEdit'

const UserEditPage = ({
  match: {
    params: { id },
  },
  users: { data },
  updateUser,
}) => {
  const user = data.filter(user => user.id === parseInt(id))[0]

  return <UserEdit {...user} updateUser={updateUser} />
}

const mapStateToProps = ({ users }) => ({ users: users.data })

export default connect(
  mapStateToProps,
  { updateUser },
)(UserEditPage)
