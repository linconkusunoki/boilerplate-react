import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'

export const Count = ({ total, increase, decrease }) => {
  return (
    <React.Fragment>
      <Nav />
      <h1>Total: {total}</h1>
      <button onClick={increase} id="increase">
        +
      </button>
      <button onClick={decrease} id="decrease">
        -
      </button>
    </React.Fragment>
  )
}

Count.propTypes = {
  total: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
}

export default Count
