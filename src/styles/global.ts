import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {    
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        min-heigth: 100vh;
        overflow-x: hidden;
        font-family: 'Lato', sans-serif;
        background-color: ${(props) => props.theme.colors.background}
    }
    .search-input-icon {
        color: ${(props) => props.theme.colors.grayLight};
    }
`
