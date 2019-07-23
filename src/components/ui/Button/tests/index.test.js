import React from 'react'
import { render } from 'helpers/tests'

import Button from '..'

describe('<Button />', () => {
  it('should render properly', () => {
    const { getByText } = render(<Button>Click Me</Button>)
    const buttonNode = getByText('Click Me')

    expect(buttonNode).toMatchSnapshot()
  })
})

