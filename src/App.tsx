import { Layout } from 'layout'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'styles/theme'
import GlobalStyles from './styles/global'
function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyles />
          <Layout />
        </>
      </ThemeProvider>
    </>
  )
}

export default App
