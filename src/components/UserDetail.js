import React from 'react'

const UserDetail = ({ firstName, lastName, avatar }) => (
  <div>
    <figure>
      <img src={avatar} alt={firstName + ' ' + lastName} />
    </figure>
    <h1>
      {firstName} <i>{lastName}</i>
    </h1>
  </div>
)

export default UserDetail
