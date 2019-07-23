import React from 'react'
import { render } from 'helpers/tests'

import Text from '..'

describe('<Text />', () => {
  describe('Based on size modifier', () => {
    describe('When size modifier equals to `small`', () => {
      it('should render properly', () => {
        const { getByText } = render(<Text size="small">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })

    describe('When size modifier equals to `medium`', () => {
      it('should render properly', () => {
        const { getByText } = render(<Text size="medium">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })

    describe('When size modifier equals to `large`', () => {
      it('should render properly', () => {
        const { getByText } = render(<Text size="large">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })
  })

  describe('Based on alignment modifier', () => {
    describe('When alignment modifier equals `left`', () => {
      it('should render properly', () => {
        const { getByText } = render(<Text alignment="left">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })

    describe('When alignment modifier equals `center`', () => {
      it('should render properly', () => {
        const { getByText } = render(<Text alignment="center">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })

    describe('When alignment modifier equals `right`', () => {
      it('should render properly', () => {
        const { getByText } = render(<Text alignment="right">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })

    describe('When alignment modifier equals `justify`', () => {
      it('should render properly', () => {
        const { getByText } = render(<Text alignment="justify">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })
  })
})
