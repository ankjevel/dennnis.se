import React from 'react'
import { shallow } from 'enzyme'
import Info from '../Info'

describe('Info', () => {
  it('creates the component', () => {
    const component = shallow(
      <Info className="test">
        <h1>Hello</h1>
      </Info>
    )

    expect(component.html()).toMatchSnapshot()
  })

  it('contains the expected classnames', () => {
    const elem = shallow(
      <Info className="test">
        <h1>Hello</h1>
      </Info>
    )
    expect(elem.hasClass('info'))
    expect(elem.hasClass('test'))
  })
})
