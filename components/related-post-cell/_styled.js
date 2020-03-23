import styled from "styled-components";
import { Container, Col } from "reactstrap";
import { sm } from "styles/breakpoints";

export const _Col = styled(Col)`
  padding: 12px;
  @media (${sm}) {
    padding: 8px 0;
  }
`;

export const _Container = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
  height: 165px;
  background-color: ${(props) => props.theme.colors.inner_background};
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  border-top: 10px ${(props) => props.theme.colors.primary}25 solid;
  border-bottom: 0 transparent solid;
  transition: 0.25s;
  cursor: pointer;
  :hover {
    border-top: 0 ${(props) => props.theme.colors.primary}25 solid;
    border-bottom: 10px transparent solid;
  }
`;

export const _h1 = styled.h1`
  font-size: 150%;
  margin-bottom: 2px;
  font-weight: bold;
  @media (${sm}) {
    font-size: 130%;
  }
`;

export const _p = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 85%;
  overflow-y: hidden;
  @media (${sm}) {
    font-size: 90%;
  }
`;
