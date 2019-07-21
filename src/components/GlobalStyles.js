import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.backgroundColor};
    font-family: ${props => props.theme.typography.fontFamily};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body * {
    box-sizing: inherit;
  }

`

export default GlobalStyles
