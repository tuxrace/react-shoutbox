import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

const TimelineList = ({ main }) => (
  <div className="row">
      <div className="col-12">
        <br/>
        <h4><span className="text-muted">Shouts of</span> <b>{main.selecteduser}</b> <i className="fa fa-comments-o" aria-hidden="true"></i></h4>
        <hr />
        {main.selected_posts.map((x, i) =>
          <div key={i}>
            <div className="lead bg-faded addPad">
              <h2><i className="text-muted">"</i> {x.shout.substr(0, 1).toUpperCase() + x.shout.substr(1)}<i className="text-muted">"</i></h2>
            </div>
              <span className="text-muted">{moment(x.date).fromNow().toString()}</span>
              <hr/>
          </div>)}
      </div>
    </div>
)

export default connect(({ main }) => ({main}), {})(TimelineList)
