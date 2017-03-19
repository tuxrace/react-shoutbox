import { describe, it } from 'mocha'
import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Message from '../components/Message'
const reducer = (state = 0, action) => {
  return state
}
const store = createStore(reducer)

const wrapper = shallow(<Provider store={store}><Message /></Provider>)

describe('Message Component', () => {
  it('it renders Message', () => {
    expect(wrapper.length).toEqual(1)
  })
})
