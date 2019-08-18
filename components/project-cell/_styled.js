import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { sm } from 'styles/breakpoints';
import Img from 'react-image';

export const _Row = Row;
export const _Col = Col;

export const _div = styled.div`
  margin: 20px 0 20px 0;
  background-color: ${props => props.theme.colors.inner_background};
  border-radius: 8px;
  padding: 22px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  border-left: 10px solid;
  border-right: 0 transparent solid;
  transition: 0.25s;
  :hover {
    border-left: 0 solid;
    border-right: 10px transparent solid;
  }
`;

export const _Container = styled(Container)`
  padding: 0;
  @media (${sm}) {
    padding: 0 12px;
  }
`;

export const _ImgCol = styled(Col)`
  @media (${sm}) {
    display: none;
  }
`;

export const _Img = styled(Img)`
  border-radius: 10px;
  width: 100%;
  margin-top: 0;
  margin-bottom: auto;
`;

export const _h2 = styled.h2`
  margin: 10px 0 4px 0;
  max-width: 100%;
  font-weight: bold;
  text-overflow: ellipsis;
  @media (${sm}) {
    max-width: 100%;
    font-size: 125%;
  }
`;

export const _p = styled.p`
  margin: 20px 0 12px 0;
  font-size: 10pt;
  @media (${sm}) {
    font-size: 10pt;
  }
`;

export const _a = styled.a`
  margin-top: 20px;
  font-size: 12pt;
  font-weight: bold;
  @media (${sm}) {
    font-size: 12pt;
  }
`;
