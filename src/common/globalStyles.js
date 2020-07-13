import { createGlobalStyle } from 'styled-components'
import { theme } from "styled-tools";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    background: #21222c;
  }
  * {
    font-family: ${theme("fontFamily")};
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
`
