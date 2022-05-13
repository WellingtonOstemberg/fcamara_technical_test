import { ThemeProvider } from 'styled-components'
import { Theme } from 'styles/theme'
import GlobalStyles from 'styles/global'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
