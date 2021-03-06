import { describe, it } from 'mocha'
import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import NotAuthorized from '../components/NotAuthorized'

const wrapper = shallow(<NotAuthorized />)

describe('NotAuthorized Component', () => {
  it('it includes Link', () => {
    expect(wrapper.find('Link').length).toEqual(1)
  })
  it('Link prop should go to /', () => {
    expect(wrapper.find('Link').prop('to')).toEqual('/')
  })
})
