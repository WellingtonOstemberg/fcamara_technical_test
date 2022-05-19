import { ThemeProvider } from 'styled-components'
import { Theme } from 'styles/theme'
import GlobalStyles from 'styles/global'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'store/configStore'

type TestWrapperProps = {
  children: JSX.Element
}
export const TestWrapper = ({ children }: TestWrapperProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyles />
          <Routes>
            <Route path="*" element={<>{children}</>} />
          </Routes>
        </>
      </ThemeProvider>
    </BrowserRouter>
  )
}
export const TestWrapperWithoutRoutes = ({ children }: TestWrapperProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  )
}

export const TestWrapperWithStore = ({ children }: TestWrapperProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
            <>
              <GlobalStyles />
              <Routes>
                <Route path="*" element={<>{children}</>} />
              </Routes>
            </>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
export const TestWrapperWithStoreWithoutRoutes = ({
  children,
}: TestWrapperProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
            <>
              <GlobalStyles />
              {children}
            </>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
