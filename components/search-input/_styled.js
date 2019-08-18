import styled from 'styled-components';
import { sm } from 'styles/breakpoints';
import { Input, Button } from 'reactstrap';

export const _div = styled.div`
  display: flex;
  flex-direction: row;
`;

export const _Input = styled(Input)`
  background-color: ${props => props.theme.colors.inner_background};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.body};
  border: 2px ${props => props.theme.colors.inner_background} solid;
  height: 45px;
  width: 38%;
  margin-left: auto;
  margin-bottom: 20px;
  :focus {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    border: 2px ${props => props.theme.colors.inner_primary} solid;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  @media (${sm}) {
    width: 100%;
  }
`;

export const _Button = styled(Button)`
  margin-left: 10px;
`;
