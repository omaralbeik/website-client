// Styled Components
import styled from 'styled-components';

const WebsiteWrapper = styled.div`
  background: ${ props => props.theme.colors.background };
  color: ${ props => props.theme.colors.primary };
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export default WebsiteWrapper;
