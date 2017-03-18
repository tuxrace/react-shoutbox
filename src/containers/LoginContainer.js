import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions/login'
import { SubmissionError } from 'redux-form'

class LoginContainer extends Component {
  submitForm (values) {
    console.log(values)
    this.props.login(values)
  }
  render () {
    return <LoginForm submitForm={this.submitForm.bind(this)} message = {this.props.main.auth_message}/>
  }
}

LoginContainer.propTypes = {
  login: React.PropTypes.func,
  main: React.PropTypes.object
}

export default connect(
  state => ({main: state.main}),
  { login })(LoginContainer)
