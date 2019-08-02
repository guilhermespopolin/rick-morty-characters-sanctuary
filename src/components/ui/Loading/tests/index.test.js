import React from 'react'
import { render } from '__tests__/utils/rtlWrapper'

import Loading from '..'

describe('<Loading />', () => {
  it('should render properly', () => {
    const { getByTestId } = render(<Loading />)

    expect(getByTestId('loading')).toMatchSnapshot()
  })
})

