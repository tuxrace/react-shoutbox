import { describe, it } from 'mocha'
import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import EditForm from '../components/EditForm'
import sinon from 'sinon'
import { expect as expectChai } from 'chai'

const testProps = {
  main: { active: 'test' },
  show: true,
  id: 'test',
  value: 'test'
}

const wrapper = shallow(<EditForm {...testProps} />)

describe('EditForm Component', () => {
  it('it renders EditForm', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('it must have an input field', () => {
    expect(wrapper.find('input').length).toEqual(1)
  })

  it('default value must be set', () => {
    expect(wrapper.find('input').get(0).props.defaultValue).toEqual('test')
  })

  it('it must be blank if not active', () => {
    const testProps = {
      main: { active: 'test' },
      show: true,
      id: 'not test'
    }
    const wrapper = shallow(<EditForm {...testProps} />)
    expect(wrapper.contains('input')).toEqual(false)
  })

  it('it must have button', () => {
    expect(wrapper.find('button').exists()).toEqual(true)
  })
  
})
