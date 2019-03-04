import React from 'react'
import { connect } from 'react-redux'
import Home from 'components/Home'
import { formValueSelector } from 'redux-form'

let HomeContainer = props => {
  return <Home {...props} />
}

const selector = formValueSelector('login')
HomeContainer = connect(state => {
  const { email, password } = selector(state, 'email', 'password')
  return {
    email,
    password,
  }
})(HomeContainer)

export default HomeContainer
