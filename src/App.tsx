import { Layout } from 'layout'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'styles/theme'
import { Provider } from 'react-redux'
import { persistor, store } from 'store/configStore'
import GlobalStyles from './styles/global'
import { PersistGate } from 'redux-persist/integration/react'
function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
            <>
              <GlobalStyles />
              <Layout />
            </>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
