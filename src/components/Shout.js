import React from 'react'
import { connect } from 'react-redux'
import ShoutContainer from '../containers/ShoutContainer'
import NotAuthorized from './NotAuthorized'

const Shout = ({ main }) => (
  <div>
    <div className="jumbotron jumbotron-fluid shoutBg">
      <div className="container">
        { (!main.auth) ? <NotAuthorized /> : <ShoutContainer />}
      </div>
    </div>
  </div>
)

Shout.propTypes = {
  main: React.PropTypes.object
}

export default connect(({ main }) => ({ main }), {})(Shout)
