import React from 'react'
import PropTypes from 'prop-types'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { ThemeProvider } from 'styled-components'

import defaultTheme from 'themes/default'

function AllProviders({ children }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  )
}

AllProviders.propTypes = { children: PropTypes.node.isRequired }

function customRender(ui, options) {
  return render(ui, { wrapper: AllProviders, ...options })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
