import { describe, it } from 'mocha'
import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import TimelineList from '../components/TimelineList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const reducer = (state=0, action) => {
  return state
}
const store = createStore(reducer)

const testProps = {
  store: store,
  main: {}
}

describe('TimelineList Component', () => {
  it('it renders TimelineList', () => {
    const wrapper = shallow(<TimelineList {...testProps}/>)
    expect(wrapper.length).toEqual(1)
  })
})
