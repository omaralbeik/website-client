// Styled Components
import styled from "styled-components";


const A = styled.a`
  color: ${props => props.theme.colors.selected};
  font-family: ${props => props.theme.fonts.title};
  &:hover {
    color: ${props => props.theme.colors.highlighted};
    font-weight: bolder;
  }
`;

export default A;
