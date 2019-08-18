import { createGlobalStyle } from 'styled-components';
import { sm } from 'styles/breakpoints';

export const _GlobalStyle = createGlobalStyle`
  #nprogress {
    pointer-events: none;
  }
  #nprogress .bar {
    background: ${props => props.theme.colors.highlighted};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
  body {
    -webkit-tap-highlight-color: transparent;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.body};
    position: absolute;
    min-height: 100vh;
    overflow-x: hidden;
    left: 0;
    right: 0;
    a {
      color: ${props => props.theme.colors.selected};
      font-family: ${props => props.theme.fonts.title};
      &:hover {
        color: ${props => props.theme.colors.highlighted};
      }
    }
    th, td {
      color: ${props => props.theme.colors.primary};
      font-family: ${props => props.theme.fonts.primary};
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: ${props => props.theme.fonts.title};
    }
    h1 {
      font-weight: bold;
    }
    h2 {
      font-size: 18pt;
      @media (${sm}) {
        font-size: 15pt;
      }
    }
    hr {
      height: 0px;
      border: none;
      opacity: 0.25;
      border-top: 1px solid ${props => props.theme.colors.primary};
      @media (${sm}) {
        margin-top: 8px;
      }
    }
    button {
      background-color: ${props => props.theme.colors.selected};
      color: ${props => props.theme.colors.background};
      font-family: ${props => props.theme.fonts.title};
      height: 45px;
      border: none;
      font-weight: bold;
      &:hover {
        background-color: ${props => props.theme.colors.highlighted};
        color: ${props => props.theme.colors.background};
      }
    }
    code, pre {
      font-family: ${props => props.theme.fonts.mono};
    }
  }
`
