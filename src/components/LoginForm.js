import React from 'react'
import { Field, reduxForm } from 'redux-form'
const { object } = React.PropTypes

const required = value => value ? undefined : 'Required'
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined

const renderField = ({ input, label, onChange, type, meta: { touched, error, warning } }) => (
  <div>
    <div className="text-white">
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="notice">{error}</span>) || (warning && <span className="notice">{warning}</span>))}
    </div>
  </div>
)

const LoginForm = ({ submitForm, handleSubmit, pristine, message }) => (
  <div className="container">          
          <form onSubmit={handleSubmit(submitForm)}>
            <span className="alert text-white">{message}</span> 
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label text-white">Username</label>
              <div className="col-10 col-md-5">
                <Field name="username" type="text" component={renderField} label="jon@mail.com" validate={[ required, email ]}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label text-white">Password</label>
              <div className="col-10 col-md-5">
                <Field name="password" component={renderField} type="password" label="****" validate={[ required ]} />
              </div>
              <div className="col-sm-2"></div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2"></div>
              <div className="col-10 col-md-4">
                <button type="submit" disabled={pristine} className="btn btn-warning btn-large"> Login </button>
              </div>
            </div>
          </form>
        </div>
)

LoginForm.propTypes = {
  submitForm: React.PropTypes.func,
  pristine: React.PropTypes.any,
  handleSubmit: React.PropTypes.func
}

renderField.propTypes = {
  input: object
}

export default reduxForm({
  form: 'login'
})(LoginForm)
