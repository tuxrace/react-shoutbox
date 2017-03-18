import React, { Component } from 'react'
import Posts from '../components/Posts'
import Message from '../components/Message'
import { handleMessage, loadshouts, loadusers, setactive, loadfollowing } from '../actions/index'
import { connect } from 'react-redux'

class ShoutContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {showEdit: false, active: 0}
    const { loadshouts, loadusers, loadfollowing } = this.props
    loadshouts(this.props.main.user)
    loadusers()
    loadfollowing()
  }
  componentDidMount () {
    
  }
  toggleEdit (id) {
    this.props.setactive(id)
    this.setState({showEdit: !this.state.showEdit,active:id})
  }
  render () {
    return <div>
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

export default connect(({main}) => ({main}), { handleMessage, loadshouts, loadusers, setactive, loadfollowing })(ShoutContainer)
