import styled from 'styled-components';
import { sm } from 'styles/breakpoints';


export const _div = styled.div`
  h1 {
    margin-top: 35px;
    font-size: 32px;
    @media (${sm}) {
      font-size: 24px;
    }
  }
  h2 {
    font-family: ${props => props.theme.fonts.body};
    margin-bottom: 24px;
    font-size: 18px;
    @media (${sm}) {
      font-size: 12px;
    }
  }
`;
