import { describe, it } from 'mocha'
import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import Shout from '../components/Shout'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const reducer = (state = 0, action) => {
  return state
}
const store = createStore(reducer)

describe('Shout Component', () => {
  it('it renders Shout', () => {
    const wrapper = shallow(<Provider store={store}><Shout /></Provider>)
    expect(wrapper.length).toEqual(1)
  })
})
