// Styled Components
import styled from "styled-components";
import {sm} from '../breakpoints';


const Separator = styled.hr`
  height: 0px;
  border: none;
  opacity: 0.25;
  border-top: 1px solid ${props => props.theme.colors.primary};
  @media (${sm}) {
    margin-top: 8px;
  }
`;

export default Separator;
