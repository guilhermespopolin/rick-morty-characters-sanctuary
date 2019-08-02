import React from 'react'
import { render } from '__tests__/utils/rtlWrapper'

import Input from '..'

describe('<Input />', () => {
  it('should render properly', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter some text" />)
    const inputNode = getByPlaceholderText('Enter some text')

    expect(inputNode).toMatchSnapshot()
  })

  describe('When there is some error', () => {
    it('should render properly', () => {
      const { getByPlaceholderText } = render(
        <Input
          placeholder="Enter some text"
          error="Something went wrong"
        />,
      )
      const inputNode = getByPlaceholderText('Enter some text')

      expect(inputNode).toMatchSnapshot()
    })
  })
})

