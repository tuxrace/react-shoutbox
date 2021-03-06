import React from 'react'
import { connect } from 'react-redux'
import { add, handleMessage, selecteduser } from '../actions/index'
import { Link, browserHistory } from 'react-router'

const Message = ({ main, handleMessage, add, selecteduser, userInfo }) => (
  <div className="jumbotron bg-warning text-white">
    <h4>{main.user}aaa</h4>
    <input name="message" id="message" type="text" placeholder="Type something..." size="30" maxLength="32" autoFocus onChange={e => handleMessage(e.target.value)} onKeyPress={e => { if (e.charCode === 13 && e.target.value.length > 0) { e.target.value = ''; add(main) } }} />
    <button className="btn btn-primary marginLeft" onClick={() => { add(main); document.getElementById('message').value = '' }}> Shout </button>
    <p> View other timelines: {main.userInfo.follows.names.map((x, i) => <Link className="btn btn-sm btn-danger" onClick={() => selecteduser(x)} key={i} to={'/timeline'}> {x} </Link>)} </p>
    <span className="badge btn-danger addPad">{main.remaining} </span> chars remaining.
    <button onClick={() => browserHistory.push('/timeline/ben@mail.com')}>Test</button>
  </div>
)

Message.propTypes = {
  main: React.PropTypes.object,
  handleMessage: React.PropTypes.func,
  add: React.PropTypes.func,
  selecteduser: React.PropTypes.string,
  userInfo: React.PropTypes.object
}

export default connect(({ main }) => ({ main }), { add, handleMessage, selecteduser })(Message)
