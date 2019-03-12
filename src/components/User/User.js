import React from 'react'

const renderUsers = userList => {
  return userList.map(({ avatar, firstName, lastName }) => {
    return (
      <li>
        <img src={avatar} alt={firstName} />
        <p>
          {firstName} {lastName}
        </p>
      </li>
    )
  })
}

const User = ({ data }) => <ul>{renderUsers(data)}</ul>

export default User
