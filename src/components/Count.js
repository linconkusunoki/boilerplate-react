import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from 'actions'
import Nav from 'components/Nav'

const Count = ({ dispatch, count }) => {
  return (
    <React.Fragment>
      <Nav />
      <h1>Count {count}</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </React.Fragment>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Count)
