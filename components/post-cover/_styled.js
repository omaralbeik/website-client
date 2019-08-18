import styled from 'styled-components';
import { sm } from 'styles/breakpoints';
import Img from 'react-image';

export const _div = styled.div`
  position: relative;
`;

export const _Img = styled(Img)`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 0 -50vw 20px -50vw;
`;

export const _creditDiv = styled.div`
  position: absolute;
  bottom: 6px;
  right: 0;
  @media (${sm}) {
    left: 0;
    text-align: center;
  }
`;
