import { Container, Row, Col } from 'reactstrap';
import InnerContainer from '../inner-container';
import { sm } from 'styles/breakpoints';
import styled from 'styled-components';

export const _Container = Container;

export const _Row = Row;

export const _Col = Col;

export const _LinksCol = styled(Col)`
  list-style: none;
  margin: 0;
  margin: 16px;
  padding: 0;
  @media (${sm}) {
    text-align: center;
  }
`;

export const _OpenSourceCol = styled(Col)`
  margin: 0 10px;
  font-size: 85%;
  @media (${sm}) {
    text-align: center;
  }
`;

export const _InnerContainer = styled(InnerContainer)`
  margin-top: 60px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
`;

export const _p = styled.p`
  text-align: center;
  margin: 16px 10px;
  > a {
    font-weight: bold;
  }
  @media (${sm}) {
    font-size: 75%;
    padding: 12px 0 20px 0;
  }
`;

export const _a = styled.a`
  font-size: 110%;
  margin: 0 8px;
  display: inline-block;
`;
