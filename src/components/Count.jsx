import React from 'react'
import { connect } from 'react-redux'
import { INCREASE, DECREASE } from 'constants/count'
import Nav from 'components/Nav'

const Count = ({ dispatch, count }) => {
  return (
    <React.Fragment>
      <Nav />
      <h1>Count {count}</h1>
      <button onClick={() => dispatch(INCREASE)}>+</button>
      <button onClick={() => dispatch(DECREASE)}>-</button>
    </React.Fragment>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Count)
