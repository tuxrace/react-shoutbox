import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions/login'
const { func, object } = React.PropTypes

class LoginContainer extends Component {
  submitForm (values) {
    this.props.login(values)
  }
  render () {
    return <LoginForm submitForm={this.submitForm.bind(this)} message = {this.props.main.auth_message}/>
  }
}

LoginContainer.propTypes = {
  login: func,
  main: object
}

export default connect(
  state => ({main: state.main}),
  { login })(LoginContainer)
