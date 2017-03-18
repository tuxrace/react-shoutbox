import { describe, it } from 'mocha'
import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import LoginForm from '../components/LoginForm'
import { Field } from 'redux-form'

const wrapper = shallow(<LoginForm />)

describe('Login Component', () => {
  it("it renders LoginForm", () => {
    expect(wrapper.length).toEqual(1)
  })
})
