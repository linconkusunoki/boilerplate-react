import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from 'actions'
import Nav from 'components/Nav'

class User extends Component {
  componentDidMount() {
    this.props.dispatch(getUser('linconkusunoki'))
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <h1>Github</h1>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(User)
