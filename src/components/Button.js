// Styled Components
import styled from "styled-components";

// Bootstrap
import {Button} from 'reactstrap';

const StyledButton = styled(Button)`
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
`;

export default StyledButton;
