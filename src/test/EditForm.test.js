import { describe, it } from 'mocha'
import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import EditForm from '../components/EditForm'

describe('EditForm Component', () => {
  it('it renders Posts', () => {
    const wrapper = shallow(<EditForm />)
    expect(wrapper.length).toEqual(1)
  })
})
