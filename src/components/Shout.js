import React from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import ShoutContainer from '../containers/ShoutContainer'
import NotAuthorized from './NotAuthorized'

const { user, auth } = JSON.parse(window.localStorage.auto)

const Shout = ({ main }) => (
  <div>
    <div className="jumbotron jumbotron-fluid shoutBg">
      <div className="container">
        { (!auth) ? <NotAuthorized /> : <ShoutContainer />}
      </div>
    </div>
  </div>
)

Shout.propTypes = {
  main: React.PropTypes.object
}

export default connect(({ main }) => ({ main }), {})(Shout)
