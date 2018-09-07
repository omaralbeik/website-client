// Styled Components
import styled from "styled-components";
import {sm} from '../breakpoints';


const Subtitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.title};
  @media (${sm}) {
    font-size: 140%;
  }
`;

export default Subtitle;
