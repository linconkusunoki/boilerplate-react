import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../store/ducks/count'
import Count from '../components/Count'

const CountPage = props => <Count {...props} />

const mapStateToProps = state => ({
  total: state.count,
})

export default connect(
  mapStateToProps,
  { increase, decrease },
)(CountPage)
