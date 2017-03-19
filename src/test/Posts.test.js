import { describe, it } from 'mocha'
import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Posts from '../components/Posts'
const reducer = (state = 0, action) => {
  return state
}
const store = createStore(reducer)
describe('Posts Component', () => {
  it('it renders Posts', () => {
    const wrapper = shallow(<Provider store={store}><Posts /></Provider>)
    expect(wrapper.length).toEqual(1)
  })
})
