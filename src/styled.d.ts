// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      orange: string
      primary: string
      secondary: string
      primaryHover: string
      gray: string
      gray700: string
      grayHover: string
      grayLight: string
      bullet: string
      white: string
      black: string
      red: string
      redHover: string
      blue: string
      blueDark: string
      blueLight: string
      disabled: string
      overlay: string
      background: string
    }
  }
}
