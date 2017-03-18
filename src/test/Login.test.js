import { describe, it } from 'mocha'
import React from 'react'
import { mount, shallow } from 'enzyme'
import expect from 'expect'

import Login from '../components/Login'
import { Link } from 'react-router'

describe('Login Component', () => {
  it("it renders Login", () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.length).toEqual(1)
  })
  
})
