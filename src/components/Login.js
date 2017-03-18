import React from 'react'
import LoginContainer from '../containers/LoginContainer'

const Login = () => (
  <div>
    <div className="jumbotron jumbotron-fluid jumboBg">
      <div className="container">
        <h1 className="display-4 text-white">Login, to continue</h1>
        <LoginContainer />
      </div>
    </div>
  </div>
)

export default Login
