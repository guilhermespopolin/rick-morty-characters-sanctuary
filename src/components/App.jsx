import React, { Fragment } from 'react'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'components/Routes'

import defaultTheme from 'themes/default'

const GlobalStyle = createGlobalStyle`
  /* Fonts */
  @import url('https://fonts.googleapis.com/css?family=Asap|Open+Sans');
  @import url('https://fonts.googleapis.com/css?family=Oswald');

  * { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: Asap, sans-serif;
    color: ${({ theme }) => theme.colors.darkGray};
    background-color: ${({ theme }) => theme.colors.lightGray};
    height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: 'Oswald', sans-serif;
  }
`

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Fragment>
        <Router>
          <Routes />
        </Router>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  )
}

export default App
