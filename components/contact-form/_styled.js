import styled from 'styled-components';
import { sm } from 'styles/breakpoints';
import InnerContainer from '../inner-container';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const _Col = Col;
export const _Form = Form;
export const _FormGroup = FormGroup;

export const _InnerContainer = styled(InnerContainer)`
  padding: 50px 50px 30px 50px;
  border-radius: 8px;
  margin: 15px 0 10px 0;
  border-top: 10px solid;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  @media (${sm}) {
    padding: 20px;
  }
`;

export const _Label = styled(Label)`
  @media (${sm}) {
    display: none;
  }
`;

export const _Input = styled(Input)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border: none;
  box-shadow: none;
  -webkit-appearance: none;
  &:focus {
    background-color: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.highlighted};
    color: ${props => props.theme.colors.primary};
    box-shadow: none;
  }
`;

export const _Button = styled(Button)`
  :disabled {
    cursor: not-allowed;
  }
  @media (${sm}) {
    width: 100%;
  }
`;
