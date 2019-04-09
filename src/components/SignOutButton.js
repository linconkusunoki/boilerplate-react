import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../store/ducks/signin'

const SignOutButton = ({ isAuthenticated, signOut }) => {
  if (!isAuthenticated) return null
  return <button onClick={() => signOut()}>Sign Out</button>
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated })

export default connect(
  mapStateToProps,
  { signOut },
)(SignOutButton)
