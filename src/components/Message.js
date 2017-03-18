import React from 'react'
import { connect } from 'react-redux'
import { add, handleMessage } from '../actions/index'
import { Link } from 'react-router'

const Message = ({ main, handleMessage, add }) => (
  <div className="jumbotron bg-warning text-white">
    <h4>{main.user}</h4>
    <input name="message" id="message" type="text" placeholder="Type something..." size="30" maxLength="32" autoFocus onChange={e => handleMessage(e.target.value)} onKeyPress={e => { if (e.charCode === 13 && e.target.value.length > 0) { e.target.value = ''; add(main) } }} />
    <button className="btn btn-primary marginLeft" onClick={() => { add(main); document.getElementById('message').value = '' }}> Shout </button>
    <p> Following: {Object.keys(main.userInfo).map((x, i) => <Link className="badge text-white" key={i} to={"/timeline/" + main.userInfo[x].name}> {main.userInfo[x].name} </Link>)} </p>
    {/*main.message*/}  <span className="badge btn-danger addPad">{main.remaining} </span> chars remaining.
  </div>
)

Message.propTypes = {
  main: React.PropTypes.object,
  handleMessage: React.PropTypes.func,
  add: React.PropTypes.func
}

export default connect(({ main }) => ({ main }), { add, handleMessage })(Message)
