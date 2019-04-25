import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const UserEdit = props => {
  const firstName = useField(props.firstName)
  const lastName = useField(props.lastName)
  const avatar = useField(props.avatar)

  const handleSubmit = event => {
    const { id, updateUser, history } = props

    event.preventDefault()

    updateUser(
      {
        id,
        firstName,
        lastName,
        avatar,
      },
      history,
    )
  }

  return (
    <div>
      <h1>Edit user {props.id}</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.field}>
          <label htmlFor="firstName" style={styles.label}>
            First Name
          </label>
          <input name="firstName" id="firstName" {...firstName} />
        </div>

        <div style={styles.field}>
          <label htmlFor="lastName" style={styles.label}>
            Last Name
          </label>
          <input name="lastName" id="lastName" {...lastName} />
        </div>

        <div style={styles.field}>
          <label htmlFor="avatar" style={styles.label}>
            Avatar Name
          </label>
          <input name="avatar" id="avatar" {...avatar} />
        </div>
        <button>Save</button>
      </form>
    </div>
  )
}

const styles = {
  field: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
  },
}

const useField = initialState => {
  const [value, setValue] = useState(initialState)

  function handleChange(event) {
    setValue(event.target.value)
  }

  return {
    value,
    onChange: handleChange,
  }
}

export default withRouter(UserEdit)
