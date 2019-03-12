import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from 'actions'
import Count from 'components/Count'

const CountContainer = props => <Count {...props} />

const mapStateToProps = state => ({
  total: state.count,
})

export default connect(
  mapStateToProps,
  { increase, decrease },
)(CountContainer)
