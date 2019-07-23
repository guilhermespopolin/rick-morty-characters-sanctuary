import React from 'react'
import { render } from 'helpers/tests'

import Image from '..'

describe('<Image />', () => {
  describe('When size modifier equals `small`', () => {
    it('should render properly', () => {
      const { getByAltText } = render(<Image size="small" alt="image sample" />)
      const imageNode = getByAltText('image sample')

      expect(imageNode).toMatchSnapshot()
    })
  })

  describe('When size modifier equals `medium`', () => {
    it('should render properly', () => {
      const { getByAltText } = render(<Image size="medium" alt="image sample" />)
      const imageNode = getByAltText('image sample')

      expect(imageNode).toMatchSnapshot()
    })
  })

  describe('When size modifier equals `large`', () => {
    it('should render properly', () => {
      const { getByAltText } = render(<Image size="large" alt="image sample" />)
      const imageNode = getByAltText('image sample')

      expect(imageNode).toMatchSnapshot()
    })
  })

  describe('When size modifier equals `responsive`', () => {
    it('should render properly', () => {
      const { getByAltText } = render(<Image size="responsive" alt="image sample" />)
      const imageNode = getByAltText('image sample')

      expect(imageNode).toMatchSnapshot()
    })
  })
})
