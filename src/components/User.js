import React from 'react'

const User = ({ avatarUrl, name }) => (
  <figure>
    <img src={avatarUrl} alt={name} />
  </figure>
)

export default User
