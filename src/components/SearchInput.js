// React
import React, {Component} from 'react';

// Bootstrap
import {Input} from 'reactstrap';

// Styled Components
import styled from 'styled-components';


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
  border: 2px ${props => props.theme.colors.primary} solid;
  height: 45px;
  :focus {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    border: 2px ${props => props.theme.colors.highlighted} solid;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;


export default SearchInput;
