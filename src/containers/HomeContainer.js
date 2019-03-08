import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from 'actions'
import Home from 'components/Home'

const HomeContainer = ({ signIn, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/users" />
  }

  return <Home signIn={signIn} />
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated })

export default connect(
  mapStateToProps,
  { signIn },
)(HomeContainer)
