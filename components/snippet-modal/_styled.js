import styled from 'styled-components';
import { Modal, Container, ButtonGroup, Button, Badge } from 'reactstrap';

export const _Modal = Modal;
export const _ButtonGroup = ButtonGroup;

export const _Container = styled(Container)`
  position: relative;
  background-color: ${props => props.theme.colors.inner_background};
  color: ${props => props.theme.colors.primary};
  padding: 20px;
  overflow-y: scroll;
  h2 {
    font-family: ${props => props.theme.fonts.title};
  }
`;

export const _Badge = styled(Badge)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.highlight};
  margin-left: 5px;
`;

export const _Button = styled(Button)`
  cursor: pointer;
  padding: 8px 20px;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  text-align: center;
  font-size: 12pt;
  font-family: ${props => props.theme.fonts.title};
`;

export const _div = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  pre {
    color: ${props => props.theme.colors.primary};
    line-height: 1.5em;
    padding: 15px;
    margin-bottom: 12px;
    font-size: 10pt;
    margin-top: 20px;
  }
`;
