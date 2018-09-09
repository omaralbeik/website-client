// Styled componenets
import styled from 'styled-components';
import {sm} from '../breakpoints';

// Bootstrap
import {Container} from 'reactstrap'

// Styles
import '../thems/syntax/dark.css';
import '../thems/syntax/light.css';

const FreeCodeContainer = styled(Container)`
  background-color: ${props => props.theme.colors.inner_background};
  padding: 75px 80px 50px 80px;
  margin: 10px 0 50px 0;
  border-radius: 8px;
  @media (${sm}) {
    background-color: ${props => props.theme.colors.background};
    padding: 30px 0;
    border: none;
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

  img {
    margin: 20px 0;
    max-width: 100%;
  }

`;

export default FreeCodeContainer;
