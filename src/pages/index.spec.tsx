import React from 'react'
import { expect } from 'chai'
import 'mocha'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import Home from './index'

describe('/', () => {
  const home = shallow(<Home />)

  it('renders Hello world', () => {
    expect(home.contains(<h1>Hello world!</h1>)).to.equal(true)
  })
})
