// Styled componenets
import styled from 'styled-components';
import {sm} from '../breakpoints';

// Bootstrap
import {Container} from 'reactstrap'

const FreeContentContainer = styled(Container)`
  margin: 10px 0 50px 0;
  padding: 20px 0 0 0;
  font-size: 13pt;
  font-family: ${props => props.theme.fonts.body};
  @media (${sm}) {
    border: none;
  }
`;

export default FreeContentContainer;
