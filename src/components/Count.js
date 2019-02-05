import React from 'react'
import Nav from 'components/Nav'

const Count = ({ total, increase, decrease }) => {
  return (
    <React.Fragment>
      <Nav />
      <h1>Total: {total}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </React.Fragment>
  )
}

export default Count
