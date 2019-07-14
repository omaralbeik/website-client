// React
import React, {Component} from 'react';

// Bootstrap
import {Input} from 'reactstrap';

// Styled Components
import styled from 'styled-components';
import {sm} from '../breakpoints';


class SearchInput extends Component {

  render() {
    const {snippet, ...props} = this.props;

    return (
      <StyledInput {...props}/>
    );
  }

}

const StyledInput = styled(Input)`
  background-color: ${props => props.theme.colors.inner_background};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.body};
  border: 2px ${props => props.theme.colors.inner_background} solid;
  height: 45px;
  width: 50%;
  margin-bottom: 10px;
  margin-left: auto;
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


export default SearchInput;
