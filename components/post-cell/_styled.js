import styled from 'styled-components';
import { Container, Col } from 'reactstrap';
import { sm } from 'styles/breakpoints';

export const _Col = styled(Col)`
  padding: 12px;
  @media (${sm}) {
    padding: 12px 30px;
  }
`;

export const _Container = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
  height: 250px;
  background-color: ${props => props.theme.colors.inner_background};
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  border-top: 10px solid;
  border-bottom: 0 transparent solid;
  transition: 0.25s;
  :hover {
    border-top: 0 solid;
    border-bottom: 10px transparent solid;
  }
`;

export const _h1 = styled.h1`
  font-size: 150%;
  margin-bottom: 2px;
  font-weight: bold;
  cursor: pointer;
  @media (${sm}) {
    font-size: 130%;
  }
`;

export const _p = styled.p`
  margin-top: 20px;
  font-size: 85%;
  overflow-y: hidden;
  @media (${sm}) {
    font-size: 90%;
  }
`;

export const _a = styled.a`
  margin-top: 12px;
  font-size: 12pt;
  font-weight: bold;
  margin-top: auto;
  margin-left: auto;
  @media (${sm}) {
    font-size: 115%;
  }
`;
