// Styled Components
import styled from "styled-components";


const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.title};
  font-weight: bold;
`;

export default Title;
