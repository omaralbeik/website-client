// Styled Components
import styled from "styled-components";


const Paragraph = styled.p`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.body};
`;

export default Paragraph;
