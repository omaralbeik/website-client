import styled from 'styled-components';
import { sm } from 'styles/breakpoints';

export const _p = styled.p`
  line-height: 38px;
  margin-right: 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: bold;
  @media (${sm}) {
    display: none;
  }
`;

export const _div = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  @media (${sm}) {
    justify-content: space-around;
    margin-right: 8px;
    margin-bottom: 0;
  }
  > div {
    margin-left: 8px;
    cursor: pointer;
    :focus {
      outline: 0;
    }
  }
`;
