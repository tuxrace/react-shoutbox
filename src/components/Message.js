import React from 'react'
import { connect } from 'react-redux'
import { add, handleMessage } from '../actions/index'
import { Link } from 'react-router'

const handleKeyPress = (e) => {
  console.log(e.keyCode)
  if (e.charCode === 13) {
    e.target.value = ''
  }
}
const Message = ({ main, handleMessage, add }) => (
  <div className="jumbotron bg-warning text-white">
    <h4>{main.user}</h4>
    <input name="message" id="message" type="text" placeholder="Type something..." size="30" maxLength="32" autoFocus onChange={ e => handleMessage(e.target.value)} onKeyPress={e => { if (e.charCode === 13 && e.target.value.length > 0) { e.target.value = ''; add(main) } }}/>
    <button className="btn btn-primary marginLeft" onClick={() => {add(main); document.getElementById('message').value = ''}}> Shout </button>
    <p> Following: {main.allusers.map((x, i) => <Link className="badge text-white" key={i} to={"/timeline/" + x.username}> {x.username} </Link>)} </p>
    {/*main.message*/}  <span className="badge btn-danger addPad">{main.remaining} </span> chars remaining.
  </div>
) 

Message.propTypes = { 
  main: React.PropTypes.object
}

export default connect(({ main }) => ({ main }), {add, handleMessage})(Message)
