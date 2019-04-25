import React from 'react'
import { Link } from 'react-router-dom'

const renderUsers = userList => {
  return userList.map(({ id, firstName, lastName, avatar }, index) => {
    return (
      <li key={index}>
        <Link to={`/user/${id}`}>
          <img src={avatar} alt={firstName} />
          <p>
            {firstName} {lastName}
          </p>
        </Link>
      </li>
    )
  })
}

const User = ({ data }) => <ul>{renderUsers(data)}</ul>

export default User
