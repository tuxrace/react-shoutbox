import React, { Component } from 'react'
import { loadselectedposts, loadusers } from '../actions/index'
import { connect } from 'react-redux'
import TimelineList from '../components/TimelineList'
import { browserHistory } from 'react-router'

class TimelineContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { showEdit: false, active: 0 }
    localStorage.setItem({selecteduser: this.props.main.selecteduser})
    const { loadselectedposts } = this.props
    loadselectedposts(this.props.main.selecteduser)
  }
  componentDidMount () {}
  render () {
    return <div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <TimelineList />
        </div>
      </div>
    </div>
  }
}

TimelineContainer.propTypes = {
  handleMessage: React.PropTypes.func,
  loadselectedposts: React.PropTypes.func,
  loadusers: React.PropTypes.func,
  main: React.PropTypes.object
}

export default connect(({ main }) => ({ main }), { loadselectedposts, loadusers })(TimelineContainer)
