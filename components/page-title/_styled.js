import styled from 'styled-components';
import { sm } from 'styles/breakpoints';

export const _div = styled.div`
  color: ${props => props.theme.colors.primary};
  margin: 35px 0 80px 10px;
  @media (${sm}) {
    margin: 35px 0 25px 0;
  }
`

export const _h1 = styled.h1`
  font-family: ${props => props.theme.fonts.title};
  font-weight: bold;
  font-size: 270%;
  @media (${sm}) {
    font-size: 18pt;
  }
`;

export const _p = styled.p`
  font-size: 120%;
  @media (${sm}) {
    font-size: 12pt;
  }
`;
