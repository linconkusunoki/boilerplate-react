import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from 'actions'
import Nav from 'components/Nav'
import User from 'components/User'

class UserContainer extends Component {
  componentDidMount() {
    this.props.getUser('linconkusunoki')
  }

  renderUser = () => {
    const { loading, error, data } = this.props.user
    if (loading) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>{error}</p>
    }

    return <User {...data} />
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <h1>Github</h1>
        {this.renderUser()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(
  mapStateToProps,
  { getUser },
)(UserContainer)
