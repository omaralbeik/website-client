// Styled Components
import styled from 'styled-components';
import {Container} from 'reactstrap'


const WebsiteWrapper = styled(Container)`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  position: absolute;
  min-height: 100vh;
  left: 0;
  right: 0;
`;

export default WebsiteWrapper;
