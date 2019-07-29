import React, { Fragment } from 'react'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'components/Routes'

import defaultTheme from 'themes/default'

const GlobalStyle = createGlobalStyle`
  /* Fonts */
  @import url('https://fonts.googleapis.com/css?family=Kalam|Oswald|Raleway&display=swap');

  * { box-sizing: border-box; }

  html, body { height: 100%; }

  body {
    margin: 0;
    position: relative;
    font-family: 'Oswald', sans-serif;
    color: ${({ theme }) => theme.colors.darkGray};
    background-color: ${({ theme }) => theme.colors.darkBlue};
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
