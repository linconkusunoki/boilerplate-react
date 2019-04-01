import React from 'react'

const renderUsers = userList => {
  return userList.map(({ avatar, firstName, lastName }, index) => {
    return (
      <li key={index}>
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
