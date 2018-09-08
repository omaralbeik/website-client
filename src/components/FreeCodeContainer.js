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
  padding: 30px;
  margin: 10px 0 50px 0;
  border-radius: 8px;
  @media (${sm}) {
    background-color: ${props => props.theme.colors.background};
    padding: 30px 0;
    border: none;
  }

  a {
    font-family: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.selected};
    &:hover {
      color: ${props => props.theme.colors.highlighted};
    }
  }
  p {
    margin: 5px 0 15px 0;
    font-size: 13pt;
    @media (${sm}) {
      font-size: 13pt;
    }
  }
  pre {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.background};
    border-radius: 5px;
    line-height: 1.5em;
    font-family: ${props => props.theme.fonts.mono};
    padding: 16px;
    margin: 20px 0;
    font-size: 12.5pt;
    @media (${sm}) {
      background-color: ${props => props.theme.colors.inner_background};
      font-size: 12pt;
    }
  }
  h1, h2, h3, h4, h5, h6 {
		font-family: ${props => props.theme.fonts.title};
		margin: 20px 0 8px 0;
    code {
      color: ${props => props.theme.colors.primary};
      background-color: ${props => props.theme.colors.background};
      border-radius: 5px;
      font-family: ${props => props.theme.fonts.mono};
      padding: 4px 10px;
    }
	}
  h1 {
    margin-top: 55px;
    font-size: 28pt;
    code {
      font-size: 36px;
    }
    @media (${sm}) {
      font-size: 20pt;
      code {
        font-size: 24px;
      }
    }
  }
	h2 {
    margin-top: 50px;
		font-size: 24pt;
    code {
      font-size: 30px;
    }
    @media (${sm}) {
      font-size: 18pt;
      code {
        font-size: 20px;
      }
    }
	}
	h3 {
    margin-top: 45px;
		font-size: 22pt;
    code {
      font-size: 28px;
    }
    @media (${sm}) {
      font-size: 18pt;
      code {
        font-size: 26px;
      }
    }
	}
	h4 {
    margin-top: 38px;
    font-size: 18pt;
		font-size: 12pt;
    font-weight: bolder;
    code {
      font-size: 16px;
      code {
        font-size: 18px;
      }
    }
	}
`;

export default FreeCodeContainer;
