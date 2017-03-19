import React from 'react'
import { connect } from 'react-redux'
import TimelineContainer from '../containers/TimelineContainer'
import NotAuthorized from './NotAuthorized'

const Timeline = ({ main, active, location }) => (
  <div className="container">
    <div className="row">
      <button className="btn btn-warning" onClick={() => history.go(-1)}><i className="fa fa-chevron-left" aria-hidden="true"></i> Back</button>
    </div>
    { (!main.auth) ? <NotAuthorized /> : <TimelineContainer />}
  </div>
)

Timeline.propTypes = {
  main: React.PropTypes.object
}

export default connect(({ main }) => ({ main }), {})(Timeline)
