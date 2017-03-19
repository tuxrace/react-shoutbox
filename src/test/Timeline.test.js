import { describe, it } from 'mocha'
import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import Timeline from '../components/Timeline'
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
describe('Timeline Component', () => {
  it('it renders Timeline', () => {
    const wrapper = shallow(<Timeline {...testProps}/>)
    expect(wrapper.length).toEqual(1)
  })

})
