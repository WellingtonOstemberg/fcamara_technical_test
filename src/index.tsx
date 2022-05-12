import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'styles/theme'
import App from './App'
import GlobalStyles from './styles/global'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <App />
      </>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
