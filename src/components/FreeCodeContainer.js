// Styled componenets
import styled from 'styled-components';
import {sm} from '../breakpoints';

// Bootstrap
import {Container} from 'reactstrap'

// Styles
import '../thems/syntax/dark.css';
import '../thems/syntax/light.css';

const FreeCodeContainer = styled(Container)`
  padding: 0;
  a {
    color: ${props => props.theme.colors.selected};
    &:hover {
      color: ${props => props.theme.colors.highlighted};
    }
  }
  p {
    margin: 5px 0 35px 0;
    font-size: 14pt;
    @media (${sm}) {
      font-size: 13pt;
    }
  }
  pre {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.inner_background};
    border-radius: 5px;
    line-height: 1.5em;
    font-family: ${props => props.theme.fonts.mono};
    padding: 16px;
    margin: 20px 0;
    font-size: 12.5pt;
    @media (${sm}) {
      font-size: 12pt;
    }
  }
  h1, h2, h3, h4, h5, h6 {
		font-family: ${props => props.theme.fonts.title};
		margin: 14px 0 8px 0;
	}
  h1 {
    margin-top: 30px;
    font-size: 28pt;
    @media (${sm}) {
      font-size: 22pt;
    }
  }
	h2 {
    margin-top: 24px;
		font-size: 24pt;
    @media (${sm}) {
      font-size: 20pt;
    }
	}
	h3 {
		font-size: 22pt;
    @media (${sm}) {
      font-size: 18pt;
    }
	}
	h4 {
    font-size: 20pt;
		font-size: 14pt;
    font-weight: bolder;
	}
`;

export default FreeCodeContainer;
