import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

const TimelineList = ({ main }) => (
  <div className="row">
      <div className="col-12">
        <h4>Shouts of {main.selecteduser}</h4>
        <hr />
        {main.selected_posts.map((x, i) =>
          <div key={i} className={(i % 2 === 0) ? '' : 'bg-faded'}>
            <div className="lead bg-faded addPad">
              <h2><i className="text-muted">"</i> {x.shout.substr(0, 1).toUpperCase() + x.shout.substr(1)}<i className="text-muted">"</i></h2>
              <span className="text-muted">{moment(x.date).fromNow().toString()}</span>
            </div>
          </div>)}
      </div>
    </div>
)

export default connect(({ main }) => ({main}), {})(TimelineList)
