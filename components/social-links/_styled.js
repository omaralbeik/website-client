import styled from 'styled-components';
import { sm } from 'styles/breakpoints';

export const _a = styled.a`
  padding: 5px;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
  img {
    width: 44px;
    height: 44px;
  }
  @media (max-width: 768px) {
    img {
      width: 40px;
      height: 40px;
      margin: 8px 4px;
    }
  }
`;

export const _div = styled.div`
  margin: 12px 8px;
  float: right;
  @media (${sm}) {
    float: none;
    text-align: center;
    margin: 0;
  }
`;
