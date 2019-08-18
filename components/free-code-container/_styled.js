// Styled componenets
import styled from 'styled-components';
import { sm } from 'styles/breakpoints';
import { Container } from 'reactstrap'

import '../../styles/themes/dark/syntax.css';
import '../../styles/themes/light/syntax.css';

export const _Container = styled(Container)`
  background-color: ${props => props.theme.colors.inner_background};
  padding: 75px 80px 50px 80px;
  margin: 10px 0 20px 0;
  border-radius: 8px;
  border-top: 10px solid;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  @media (${sm}) {
    background-color: ${props => props.theme.colors.background};
    box-shadow: none;
    padding: 30px 0;
    border: none;
  }
  code {
    font-size: 110%;
  }
  pre {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.background};
    border-radius: 5px;
    line-height: 1.5em;
    padding: 16px;
    margin: 15px 0 35px 0;
    font-size: 12.5pt;
    @media (${sm}) {
      background-color: ${props => props.theme.colors.inner_background};
      font-size: 12pt;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 30px 0 8px 0;
    code {
      font-weight: bold;
      color: ${props => props.theme.colors.primary};
      background-color: ${props => props.theme.colors.background};
      border-radius: 5px;
      padding: 4px 10px;
    }
  }
  h1 {
    font-size: 22pt;
    @media (${sm}) {
      font-size: 19pt;
    }
  }
  h2 {
    @media (${sm}) {
      font-size: 18pt;
    }
  }
  h3 {
    @media (${sm}) {
      font-size: 15pt;
    }
  }
  h4 {
    @media (${sm}) {
      font-weight: bold;
      font-size: 14pt;
    }
  }
  ul, ol {
    margin: 20px 0;
    padding: 0 0 0 28px;
    li {
      padding: 4px 0;
    }
  }
  p, li, ul {
    line-height: 1.8;
    code {
      font-size: 120%;
    }
  }
  img {
    margin: 20px 0;
    max-width: 100%;
  }
`;
