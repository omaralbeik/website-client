// Styled Components
import styled from "styled-components";

// Bootstrap
import {sm} from '../breakpoints';

const PageTitle = styled.h1`
  color: ${props => props.theme.colors.inner_primary};
  font-family: ${props => props.theme.fonts.title};
  font-weight: bold;
  margin: 30px 0 60px 12px;
  @media (${sm}) {
    font-size: 165%;
    margin: 20px 0 45px 0;
  }
`;

export default PageTitle;
