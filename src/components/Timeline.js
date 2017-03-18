import React from 'react'
import { connect } from 'react-redux'
import { del, handleMessage, update } from '../actions/index'
import EditForm from './EditForm'
import moment from 'moment'

const Timeline = ({ main, del, showEdit, toggleEdit, active, handleMessage, update, location }) => (
  <div className="container">
    <div className="row">
      <button className="btn btn-warning" onClick={() => history.go(-1)}><i className="fa fa-chevron-left" aria-hidden="true"></i> Back</button>
    </div>
    <div className="row">
      <div className="col-12">
        <h4>Shouts of {location.query.id}</h4>
        <hr />
        {main.posts.map((x, i) =>
          <div key={i} className={(i % 2 === 0) ? '' : 'bg-faded'}>
            <p className="lead bg-faded addPad">
              <h2><i className="text-muted">"</i> {x.shout.substr(0, 1).toUpperCase() + x.shout.substr(1)}<i className="text-muted">"</i></h2> 
              <span className="text-muted">{moment(x.date).fromNow().toString()}</span>
            </p>            
          </div>)}
      </div>
    </div>
  </div>
)

Timeline.propTypes = {
  main: React.PropTypes.object
}

export default connect(({ main }) => ({ main }), { del, handleMessage, update })(Timeline)
