import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from 'actions'
import Count from 'components/Count'

const CountContainer = ({ count, increase, decrease }) => {
  return <Count increase={increase} decrease={decrease} total={count} />
}

const mapStateToProps = state => ({
  count: state.count,
})

export default connect(
  mapStateToProps,
  { increase, decrease },
)(CountContainer)
