// Styled Components
import styled from "styled-components";

// Routing & Links
import {Link} from 'react-router-dom';

const A = styled(Link)`
  color: ${props => props.theme.colors.selected};
  font-family: ${props => props.theme.fonts.title};
  &:hover {
    color: ${props => props.theme.colors.highlighted};
  }
`;

export default A;
