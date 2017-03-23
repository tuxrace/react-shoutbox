import React, { Component } from 'react'
import Posts from '../components/Posts'
import Message from '../components/Message'
import { handleMessage, loadshouts, setactive, setuser } from '../actions/index'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class ShoutContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {showEdit: false, active: 0}
    const { loadshouts, setuser } = this.props
    setuser()
    loadshouts(this.props.main.user)
  }
  componentDidMount () {
    
  }
  toggleEdit (id) {
    this.props.setactive(id)
    this.setState({showEdit: !this.state.showEdit, active: id})
  }
  render () {
    return <div>
      <div className="row">
        <div className="col-lg-6"><Link to="/">Logout <i className="fa fa-sign-out" aria-hidden="true"></i></Link></div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <Message />
        </div>
        <div className="col-12 col-lg-6">
          <Posts {...this.state} toggleEdit={this.toggleEdit.bind(this)}/>
        </div>
      </div>
    </div>
  }
}

ShoutContainer.propTypes = {
  handleMessage: React.PropTypes.func,
  loadshouts: React.PropTypes.func,
  loadusers: React.PropTypes.func,
  main: React.PropTypes.object
}

export default connect(({main}) => ({main}), { handleMessage, loadshouts, setactive, setuser })(ShoutContainer)
