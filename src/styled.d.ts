// import original module declarations
import 'styled-components'
import { colors } from 'styles/colors'
import { spacings } from 'styles/spacings'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors
    spacings: typeof spacings
  }
}
