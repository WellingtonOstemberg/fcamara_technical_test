import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'styles/theme'
import App from './App'
import GlobalStyles from './styles/global'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById('root'),
)
