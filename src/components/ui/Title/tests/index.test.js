import React from 'react'
import { render } from 'helpers/tests'

import Title from '..'

describe('<Title />', () => {
  it('should render properly', () => {
    const { getByText } = render(<Title>Sample Title</Title>)
    const titleNode = getByText('Sample Title')

    expect(titleNode).toMatchSnapshot()
  })
})

