import styled from 'styled-components';
import { Container, Row } from 'reactstrap';
import { sm } from 'styles/breakpoints';

export const _Row = Row;

export const _Container = styled(Container)`
  padding: 0;
  @media (${sm}) {
    padding: 0 12px;
  }
`;

export const _h1 = styled.h1`
  margin-top: 80px;
  font-size: 190%;
  user-select: none;
  @media (${sm}) {
    font-size: 160%;
    text-align: center;
  }
`;

export const _h2 = styled.h2`
  font-size: 15pt;
  margin-bottom: 20px;
  user-select: none;
  font-family: ${props => props.theme.fonts.body};
  font-weight: normal;
  @media (${sm}) {
    font-size: 110%;
    text-align: center;
  }
`;