// Styled Components
import styled from 'styled-components';

// Routing & Links
import {NavLink} from 'react-router-dom';


const NavA = styled(NavLink)`
  color: ${props => props.theme.colors.selected};
  font-family: ${props => props.theme.fonts.title};
  &:hover {
    color: ${props => props.theme.colors.highlighted};
  }
`;

export default NavA;
