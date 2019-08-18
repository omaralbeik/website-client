import styled from 'styled-components';
import { Container, Col, Badge } from 'reactstrap';
import { sm } from 'styles/breakpoints';

export const _Col = styled(Col)`
  padding: 12px;
  @media (${sm}) {
    padding: 12px 30px;
  }
`;

export const _Container = styled(Container)`
  position: relative;
  background-color: ${props => props.theme.colors.inner_background};
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  height: 300px;
  overflow-y: hidden;
  cursor: pointer;
  @media (${sm}) {
    height: auto;
    max-height: 250px;
    margin: 0;
  }
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  border-top: 10px solid;
  border-bottom: 0 transparent;
  transition: 0.25s;
  :hover {
    border-top: 0 solid;
    border-bottom: 10px transparent;
  }
`;

export const _Badge = styled(Badge)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.highlight};
  margin-left: 5px;
`;

export const _div = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  pre {
    color: ${props => props.theme.colors.primary};
    line-height: 1.5em;
    padding: 15px;
    margin: 8px 0 10px 0;
    font-size: 10pt;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    @media (${sm}) {
      display: none;
    }
  }
`;
