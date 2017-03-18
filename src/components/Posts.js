import React from 'react'
import { connect } from 'react-redux'
import { del, handleMessage, update } from '../actions/index'
import EditForm from './EditForm'
import moment from 'moment'

const Posts = ({ main, del, showEdit, toggleEdit, active, handleMessage, update }) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h4>My Shouts</h4>
        <small>Total: <button className="btn btn-sm btn-warning">{main.posts.length}</button></small>
        <hr />
        {main.posts.map((x, i) =>
          <div key={i} className={(i % 2 === 0) ? '' : 'bg-faded'}>
            <div className="lead">
              <h2><i className="text-muted">"</i> {x.shout.substr(0, 1).toUpperCase() + x.shout.substr(1)}<i className="text-muted">"</i></h2> </div>
            <div className="flexInline">
              <span className="text-muted">
                {moment(x.date).fromNow().toString()}</span>
              <a href="javascript:;" onClick={() => toggleEdit(x.postId)}>Edit <i className={(showEdit && main.active === x.postId) ? 'fa fa-chevron-circle-up' : 'fa fa-chevron-circle-down'}></i> </a>
              <a href="javascript:;" onClick={() => del(x.postId)} > Delete <i className="fa fa-times text-danger"></i></a>
            </div>
            <EditForm main={main} value={x.shout} id={x.postId} show={showEdit} active={active} handleMessage={handleMessage} update={update} toggleEdit={toggleEdit} />
            <hr />
          </div>)}
      </div>
    </div>
  </div>
)

Posts.propTypes = {
  main: React.PropTypes.object
}

export default connect(({ main }) => ({ main }), { del, handleMessage, update })(Posts)
