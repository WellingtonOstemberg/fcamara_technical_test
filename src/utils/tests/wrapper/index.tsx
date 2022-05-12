import { ThemeProvider } from 'styled-components'
import { Theme } from 'styles/theme'
import GlobalStyles from 'styles/global'

type TestWrapperProps = {
  children: JSX.Element
}
export const TestWrapper = ({ children }: TestWrapperProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  )
}
