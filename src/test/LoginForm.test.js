import { describe, it } from 'mocha'
import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import LoginForm from '../components/LoginForm'

const wrapper = shallow(<LoginForm />)

describe('LoginForm Component', () => {
  it('it renders LoginForm', () => {
    expect(wrapper.length).toEqual(1)
  })
})
