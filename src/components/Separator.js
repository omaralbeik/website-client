// Styled Components
import styled from "styled-components";

const Separator = styled.hr`
  height: 0px;
  border: none;
  opacity: 0.25;
  border-top: 1px solid ${props => props.theme.colors.primary};
`;

export default Separator;
